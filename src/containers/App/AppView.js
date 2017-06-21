import React from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomePage from '../../components/HomePage'
import AuthService from '../../utils/AuthService'

class App extends React.Component {

  authService = new AuthService()
 
  componentWillMount() {
    // Add callback for lock's `authenticated` event
this.authService.lock.on('authenticated', (authResult) => {
      this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
    if (!error) {
      console.log(AuthService);
       AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        this.props.loginSuccess(profile)
        return this.props.history.push({ pathname: '/dashboard' });
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
        </Switch>
      </div>
    )
  }
}

export default App;

//  <Route path="/about" component={AboutPage}/>
          //  <Route component={NotFoundPage}/>



