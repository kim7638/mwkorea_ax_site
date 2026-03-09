import { datasObject } from 'datas/portfolio';

const visualDatasSelector = ['MyGenesisApp', 'HanaCardMobileDirectCenter', 'HanaCardAG', 'HanaCardMulti', 'Mintit', 'PrugioSmartHome', 'SkSmartOffice', 'GenesisDigitalKeyApp'];
const visualDatas = visualDatasSelector.map((item) => {
  return datasObject[item];
});

export { visualDatas };
