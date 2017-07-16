
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import About from './about/about';

class HomePage extends Component {
    render() {
        return (    
            <div>
                <div className="mainbody-div">   
                        <button className="banner-btn">
                            <Link to='/about'>
                                <span>Learn More</span>
                            </Link>
                        </button>
                    </div>
                <div className="about-us">
                    <div><p className="about-text">How It Works</p></div>
                    <About/>
                </div>   
            </div>
        );
    }
}

export default HomePage;


              
