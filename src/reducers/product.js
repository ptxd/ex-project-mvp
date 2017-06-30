import {SINGLE_PRODUCT} from '../actions/product';

export default function (state=[],action){
    switch(action.type){
        case SINGLE_PRODUCT:
        return [action.payload.data,...state]
    }
    return state;
}