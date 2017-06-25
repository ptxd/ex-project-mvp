import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';
import HomePage from '../../components/HomePage';
import AboutPage from '../../components/AboutPage';
import NotFoundPage from '../../components/NotFoundPage';
import AuthService from '../../utils/AuthService';

class App extends Component {

  authService = new AuthService()
 
  componentWillMount() {
    // Add callback for lock's `authenticated` event
this.authService.lock.on('authenticated', (authResult) => {
      this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
    if (!error) {
       AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        this.props.loginSuccess(profile)
        return this.props.history.push({ pathname: '/about' });
    }
    else {
        return this.props.loginError(error);
        }
    });
});
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', (error) => {
      this.props.loginError(error)
      return this.props.history.push({ pathname: '/' })
    })
  }

  render() {
    return(
      <div>
        <HeaderContainer authService={this.authService} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/notfound" component={NotFoundPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;


