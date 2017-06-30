import axios from 'axios';

const ROOT_URL = 'http://localhost:5000/dashboard';

export const PRODUCT_DATA = 'PRODUCT_DATA';
export function fetchProductData(product){
    const url = `${ROOT_URL}?q=${product}`;
    const request = axios.get(url);
    return {
        type: PRODUCT_DATA,
        payload:request
    };
}

