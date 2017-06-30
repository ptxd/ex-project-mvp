import { combineReducers } from 'redux';
import auth from './auth';
import tracker from './tracker';
import product from './product';

const rootReducer = combineReducers({
  auth,
  tracker,
  product
  // add your other reducers here
})

export default rootReducer;