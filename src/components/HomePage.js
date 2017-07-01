
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import video from '../video/background.mp4'

class HomePage extends Component {

    render() {
        return (    
            <div>
                <video className='main-image' autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
                <div className="mainbody-div">
                    <Link to='/about'>
                        <button className="banner-btn">
                            <span>Learn More</span>
                        </button>
                    </Link>
                </div>   
            </div>
        );
    }
}

export default HomePage;
