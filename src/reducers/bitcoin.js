import {BITCOIN_DATA} from '../actions/bitcoin';

export default function(state=[],action){
    switch(action.type){
        case BITCOIN_DATA:
            return [action.payload.data,...state];
    }
    return state;
}