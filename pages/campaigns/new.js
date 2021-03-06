import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' }) // while campaign is being processed, show user spining loading button and clear error message after reloading

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({ // when we are calling from the browswer, metamask automatically calculates the gas ammount so we dont have to specify here
                from: accounts[0]        
            });

        Router.pushRoute('/'); // after new campaign is created, direct user to the home page    
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        
        this.setState({ loading: false })
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                    <h1 style={{color: 'red', fontFamily: 'arial', fontSize: '15px', marginTop: '20px'}}>
                        NOTE: Please be aware that this application might not fully function if you do not have Metamask and/or Web3 installed. 
                        If you click "View Request" and an error page shows up, click the browser back button to get to this page
                    </h1>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;