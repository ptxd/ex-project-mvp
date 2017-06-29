import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/dashboard';

export const PRODUCT_DATA = 'PRODUCT_DATA';
export function fetchProductData(product){
    const request = axios.get(ROOT_URL);
    return {
        type: PRODUCT_DATA,
        payload:request
    };
}

