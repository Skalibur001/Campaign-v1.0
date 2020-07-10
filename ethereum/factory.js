import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc18C671221495B6807e4c3488EEAEcc8Cf66cD54"
);

export default instance;
