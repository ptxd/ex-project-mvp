
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import About from './about/about';
import Hiw from './hiw/hiw';
import Footer from './footer/footer'

class HomePage extends Component {
    render() {
        return (    
            <div>
                <div className="mainbody-div"> 
                    <div className="exstral">
                        <p className=" tracking-in-expand">EXSTRAL</p> 
                    </div> 
                    <button className="banner-btn">
                        <Link to='/about'>
                            <span>Learn More</span>
                        </Link>
                    </button>
                </div>
                <div className="about-us">
                    <div><p className="about-text">WHAT WE DO</p></div>
                    <About/>
                </div>
                <div className="hiw-div">
                    <div><p className="hiw-text">HOW IT WORKS</p></div>
                    <div>
                        <Hiw></Hiw>
                    </div>
                </div>  
            </div>
        );
    }
}

export default HomePage;


              
