import React from 'react'
import './about.css';

const About = () => 
    <div className="about-us-wrapper">
        <div className="about-us-container">
            <div className="circle embossed">
                <p className="embossedtext">BlockChain<br/>Technology</p>
            </div>
            <div className="content embossed">
                <p className="embossedtext">
                    KEEPING UP WITH THE LATEST IN BLOCKCHAIN<br/>TECHNOLOGY INCLUDING NEW AND UPCOMING IDEAS IN CRYPTOCURRENCY 
                </p>
            </div>
        </div>
        <span>
        <div className="about-us-container">
            <div className="circle embossed">
                <p className="embossedtext">Upcoming <br/>ICO's</p>
            </div>
            <div className="content embossed">
                <p className="embossedtext">
                   LOOK OUT FOR NEW AND UPCOMING ICO'S, <br/>THE UNDERLYING TECHNOLOGIES BEHIND WHAT THEY DO AND HOW THEY PLAN TO DO IT
                </p>
            </div>
        </div>
        </span>
        <span>
        <div className="about-us-container">
            <div className="circle embossed">
                <p className="embossedtext">ICO<br/>Research</p>
            </div>
            <div className="content embossed">
                <p className="embossedtext">
                    ANALYTICAL AND FUNDAMENTAL ANALYSIS OF<br/> UPCOMING, CURRENT & COMPLETED ICO'S ON A SINGLE AESTHETICALLY DESIGNED REPORT
                </p>
            </div>
        </div>
        </span>
    </div>

export default About;