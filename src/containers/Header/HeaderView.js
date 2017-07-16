import React from 'react';
// import { Link } from 'react-router-dom'
import AuthService from '../../utils/AuthService';
import {Link} from 'react-router-dom';

const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
    <div> 
            { !isAuthenticated ? (
                <header className="before-auth">
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
                                <Link to='/' className="well-text">Home</Link>
                            </li>   
                            <li className="well">
                                <Link to='/about' className="well-text">Technology</Link>
                            </li>
                            <li className="well">
                                <Link to='/dashboard' className="well-text">Dashboard</Link>
                            </li>   
                            <li className="well">
                                <Link to='/product' className="well-text">Product</Link>
                            </li>
                        </div>
                    </div>
                    <div className="right-side">
                        <button onClick={() => {authService.login();loginRequest()}} className="btn btn-success glyphicon glyphicon-log-in"> 
                        <span>Login</span> 
                        </button>
                    </div>
                </header>
                ) : (
                <header className="after-auth">
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
                                    <Link to='/dashboard' className="well-text">Dashboard</Link>
                                </li>   
                                <li className="well">
                                    <Link to='/product' className="well-text">Product</Link>
                                </li>
                                <li className="well">
                                    <Link to='/about' className="well-text">Technology</Link>
                                </li>
                                <li className="well">
                                    <Link to='/' className="well-text">Home</Link>
                                </li>   
                            </div>
                        </div>
                    <div className="right-side">
                        <img src={profile.picture} height="40px" alt="profile" /><span>Welcome, {profile.nickname}</span>
                        <button onClick={() => {logoutSuccess();AuthService.logout();history.push({ pathname: '/' })}}>
                            Logout
                        </button>
                    </div>
                </header>
                )}
            { error &&
            <p>{error}</p>
            }        
    </div>;

export default Header