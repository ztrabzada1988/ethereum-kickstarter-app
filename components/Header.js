import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '20px', fontSize: '16px', height: '65px', backgroundColor: '#52ff90' }}>
            <Link route="/">
                <a style={{ fontWeight: 'bold'}} className="item">CrowdCoin</a>
            </Link>

            <Menu.Menu style={{margin: 'auto', textAlign: 'center'}} position="center">
                <h3 style= {{ paddingLeft: '150px' }}>Ethereum Kickstarter App</h3> 
            </Menu.Menu>

            <Menu.Menu position="right">
                <Link route="/">
                    <a style={{ fontWeight: 'bold'}} className="item">Campaigns</a>
                </Link>

                <Link route="/campaigns/new">
                    <a style={{ fontWeight: 'bold'}} className="item">+</a>
                </Link>  
            </Menu.Menu>
        </Menu>
    );
};