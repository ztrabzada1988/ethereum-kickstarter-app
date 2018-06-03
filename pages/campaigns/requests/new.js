import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';

import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recepient: ''
    };

    static async getInitialProps(props) {
        const { address } = props.query
        
        return { address };
    }


    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value={this.state.description}
                        onChange={event => this.setState({ description: event.target.value} )}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Value in Ether</label>
                    <Input 
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value} )}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input 
                        value={this.state.recepient}
                        onChange={event => this.setState({ recepient: event.target.value} )}
                    />
                </Form.Field>

                <Button primary>Create</Button>
            </Form>
        );
    }
}

export default RequestNew;