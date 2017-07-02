import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import {persistStore} from 'redux-persist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/ConfigureStore';
import AppContainer from './containers/App/AppContainer';
import 'bootstrap/dist/js/bootstrap.min.js';  
import './css/main.css';

// import('./reset.css');


const store = configureStore()
persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root'));
