import axios from 'axios';

const ROOT_URL = 'http://localhost:5000/product';

export const SINGLE_PRODUCT = 'SINGLE_PRODUCT';

export function fetchSingleData(product){
    const url = `${ROOT_URL}?q=${product}`;
    const request = axios.get(url);
    return {
        type: SINGLE_PRODUCT,
        payload:request
    };
}

