import React,{Component} from 'react';
import '../../../node_modules/aos/dist/aos.css';
import './hiw.css';
import AOS from 'aos';
import authority from '../../Images/authority1.jpeg';
import image3 from '../../Images/techstack.PNG';
import image4 from '../../Images/rsz_product_page.png';
import image2 from '../../Images/graphchart.PNG';


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
                    <div className="item" data-aos="zoom-out-right">
                        <img src={authority} className="hiw-div-left"></img>
                        <div className="hiw-div-right">
                            <p>  
                                Exstral's goal is to provide oversight to the ICO industry while protecting investors and legitimate entrepenuers. 
                            </p>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-out-left">
                        <img src={image2} className="hiw-div2-left"></img>
                        <div className="hiw-div2-right">
                            <p>Get live feed of prices directly on your dashboard.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item" data-aos="zoom-out-right">
                        <img src={image3} className="hiw-div3-left"></img>
                        <div className="hiw-div3-right">
                            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-out-left">
                        <img src={image4} className="hiw-div4-left"></img>
                        <div className="hiw-div4-right">
                            <p>
                                PDF'less reports are the way to go. Read reports with data-driven visualizations using some of the latest technologies available on the web. 
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Hiw;