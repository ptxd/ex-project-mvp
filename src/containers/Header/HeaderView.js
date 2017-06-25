import React from 'react';
// import { Link } from 'react-router-dom'
import AuthService from '../../utils/AuthService';

const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
    <div> 
      <header>
          <div className="left-side">
              <div className="menu-button">
                  <button className="hamburger1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </button>
              </div>
              <div className="collapse menu-item" id="collapseExample">
                  <li className="well">
                      How It Works
                  </li>
                  <li className="well">
                      Discover
                  </li>
                  <li className="well">
                      Contact Us
                  </li>   
              </div>
          </div>
          <div className="right-side">
            { !isAuthenticated ? (
                <button onClick={() => {authService.login();loginRequest()}} className="btn btn-success glyphicon glyphicon-log-in"> 
                  <span>Login</span> 
                </button>
                ) : (
                <div>
                  <img src={profile.picture} height="40px" alt="profile" /><span>Welcome, {profile.nickname}</span>
                  <button onClick={() => {logoutSuccess();AuthService.logout();history.push({ pathname: '/' })}}>
                    Logout
                  </button>
                </div>
                )}
            { error &&
            <p>{error}</p>
            }        
          </div>
      </header>
    </div>;

export default Header