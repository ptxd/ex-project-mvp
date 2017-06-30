import {PRODUCT_DATA} from '../actions/searchbar';

export default function (state=[],action){
    switch(action.type){
        case PRODUCT_DATA:
        return [action.payload.data,...state]
    }
    return state;
}