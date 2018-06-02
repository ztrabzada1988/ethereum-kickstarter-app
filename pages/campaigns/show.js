import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
    static async getInitialProps(props) { //this function is from next
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return { // console.log summary and refer to getSummary() function from Campaign.sol to see the values summary[0] below
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    render() {
        return (
            <Layout>
                <h3>Show Campaign</h3>
            </Layout>    
        );
    }
}

export default CampaignShow;