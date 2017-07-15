import axios from 'axios';

const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/BTCE/USDBTC.json?api_key=s_q_zp6pQcanXQ7fxyVy';

export const BITCOIN_DATA = 'BITCOIN_DATA';

export function fetchBitcoinData(){
    const request = axios.get(ROOT_URL);
    return {
            type:BITCOIN_DATA,
            payload: request
        }
}