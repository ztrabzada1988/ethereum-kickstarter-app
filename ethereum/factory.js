import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf10b5900827C98Fe1bdd3c3271293f4e19f784c9' // this is our deployed contract address of our Campaign Factory
);

export default instance;