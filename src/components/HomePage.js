
import React, { Component } from 'react';
import video from '../video/background.mp4'

class HomePage extends Component {

    render() {
        return (    
            <div>
                <video className='main-image' autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
                <div className="mainbody-div">
                    <button className="banner-btn">
                        <span>Learn More</span>
                    </button>
                </div>   
            </div>
        );
    }
}

export default HomePage;
