pragma solidity ^0.4.17;

contract CampaignFactory { // using CompaignFactory we add the level of security so we have control over deployed compaign codes.
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender); // msg.sender here is the user who is creating the new compain
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request { // struct is similar to Class/Object in Javascript with key value pairs
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; // we wont track the "NO" votes but compare the "YES" votes to the total amount
        mapping(address => bool) approvals;
    }
    
    Request[] public requests; // this is not instance but an idea of struc Request
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; // mapping in constant time but cant store keys or iterate through all value like for loop for arrays            
    uint public approvalCount; // increment value everytime somebody contributes
    
    modifier restricted() {
        require(msg.sender == manager);
        _; // when restricted modifier is called on any other function, _ will be replace with that funciton
    }
    
    function Campaign(uint minimum, address creator) public {
        manager = creator; 
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true; // checks whether an address has contributed to the Campaign
        approvalCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({ // memory doesnt change the original array. It is like making a copy of it
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index]; // storage type becuase we want to change the exiting not make a copy
        
        require(approvers[msg.sender]); // make sure they have contributed
        require(!request.approvals[msg.sender]); // if this person has already voted kick them out (!)
        
        request.approvals[msg.sender] = true; 
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approvalCount / 2)); // approvalCount must be more the 50%
        require(!request.complete); // check to make sure this request is not already complete (finalize the same request more than once) 
        
        request.recipient.transfer(request.value); // send the contribution amount
        request.complete = true;
    }
}
