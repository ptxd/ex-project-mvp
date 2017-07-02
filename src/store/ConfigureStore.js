import {compose,createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import promiseMiddleware from 'redux-promise';
import {persistStore, autoRehydrate} from 'redux-persist';


const createStoreFactory = compose(applyMiddleware(promiseMiddleware),autoRehydrate());

const finalCreateStore = createStoreFactory(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}

