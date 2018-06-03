import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
    static async getInitialProps(props) {
        const { address } = props.query
    }

    render() {
        return (
            <h3>Create a Request</h3>
        );
    }
}

export default RequestNew;