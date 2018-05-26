const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider( // HDWalletProvider module connects to a target network and unlock a account by giving a neumonic code below
    'gadget target scan planet uncover right extend picture spare lady silver veteran', 
    'https://rinkeby.infura.io/Er9icAgAewb6EZTCdbXM' // infura connects to node to the eth network
);

const web3 = new Web3(provider);

const deploy = async () => { // so we can use await
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //interface is ABI
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '4000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);    
};

deploy();