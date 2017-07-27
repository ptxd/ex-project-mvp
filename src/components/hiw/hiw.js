import React,{Component} from 'react';
import '../../../node_modules/aos/dist/aos.css';
import './hiw.css';
import AOS from 'aos';


class Hiw extends Component{
    constructor(props, context) { 
    super(props, context); 
    AOS.init(); 
  } 
 
  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

    render(){
        return (
            <div>
                <div>
                    <div className="item">
                        <img src={'http://cdn.wallpapersafari.com/84/21/CFyc4K.jpg'} className="hiw-div-left"   
                        data-aos="zoom-out-right"
                        data-aos-offset="300"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        />
                        <div className="hiw-div-right" 
                            data-aos="zoom-out-left"
                            data-aos-offset="300"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <p className="hiw-p-title">  
                               Providing unparallel oversight of the ICO industry and its technologies
                            </p>
                            <p className="hiw-p-text">
                                Cryptocurrencies allowed for the creation of a new method for startups to raise capital without going through conventional routes of raising capital in multiple stages.
                                <br/>
                                <br/>
                                <b>
                                Understand the nature of your investment in an unknown entity including various factors which can help you make a better informed decision.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="item">
                    <img src={'http://cdn.wallpapersafari.com/74/65/86wOua.jpg'} 
                        className="hiw-div-left"   
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        />
                        <div className="hiw-div-right" 
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <p className="hiw-p-title">  
                               Insights into financial and commercial feasibility  
                            </p>
                            <p className="hiw-p-text">
                                Financing done through cryptocurrencies are not legally binding hence the nature of the investment is inherently risky.
                                <br/>
                                <br/>
                                <b>
                                Tracking the milestones and progress of the companies which raised funds through ICO's is crucial in determining if investment goals and objectives are met.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="item">
                    <img src={'http://cdn.wallpapersafari.com/93/73/TRD5mx.jpg'} 
                        className="hiw-div-left"   
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        />
                        <div className="hiw-div-right" 
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <p className="hiw-p-title">  
                               State of the art dashboard for keeping tabs of all your investments
                            </p>
                            <p className="hiw-p-text">
                                The ability to keep track on multiple products and investment can be challenging without easy to use interfaces.
                                <br/>
                                <br/>
                                <b>
                                Get access to a personalized dashboard to find and keep track of your investments or find out whats new in the industry and market.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="item">
                    <img src={'http://cdn.wallpapersafari.com/78/65/B7YruM.jpg'} 
                        className="hiw-div-left"   
                        data-aos="zoom-in"
                        data-aos-duration="2500"
                        />
                        <div className="hiw-div-right" 
                            data-aos="zoom-in"
                            data-aos-duration="2500"
                        >
                            <p className="hiw-p-title">  
                               Keep up to date with the latest happenings in the ICO industry
                            </p>
                            <p className="hiw-p-text">
                                Everyday new startup companies spring up and it is the same in the ICO industry. Find out the latest technological advancements in the crypto world and search out for that new and exciting oppurtunity.
                                <br/>
                                <br/>
                                <b>
                                Find out about new, current and upcoming ICO's and the problems they are out to solve and how they plan to do it.
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Hiw;