import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    // static won't allow instance of CampaignIndex to have access to it's function
    static async getInitialProps() { // getInitialProps is a NEXT.js lifecycle method not react
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }; // campaigns will be available as props
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => { // we are converting each campaign address to a Card
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Button
                        floated="right"
                        content="Create Campaign"
                        icon="add circle"
                        primary // react shortcut. same as primary={true}
                    />
                    {this.renderCampaigns()}
                </div>
            </Layout>    
        );    
    }
}

export default CampaignIndex;