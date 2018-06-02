import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEd60636b35b08cF4B590B2D071A828a600DfCF89' // this is our deployed contract address of our Campaign Factory
);

export default instance;