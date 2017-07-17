import React,{Component} from 'react';
import '../../../node_modules/aos/dist/aos.css';
import './hiw.css';
import AOS from 'aos';
import icolist from '../../Images/list of ico.PNG';
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
                        <img src={icolist} className="hiw-div-left"></img>
                        <div className="hiw-div-right">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-out-left">
                        <img src={image2} className="hiw-div2-left"></img>
                        <div className="hiw-div2-right">
                            <p>Lorem ipsum dolor sit amet, an eripuit percipitur cum, quo sumo admodum ne. Malis nominavi no pri, an cum vidit populo.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item" data-aos="zoom-out-right">
                        <img src={image3} className="hiw-div3-left"></img>
                        <div className="hiw-div3-right">
                            <p>Lorem ipsum dolor sit amet, an eripuit percipitur cum, quo sumo admodum ne. Malis nominavi no pri, an cum vidit populo.Lorem ipsum dolor sit amet, an eripuit percipitur cum, quo sumo admodum ne. Malis nominavi no pri, an cum vidit populo.Lorem ipsum dolor sit amet, an eripuit percipitur cum, </p>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-out-left">
                        <img src={image4} className="hiw-div4-left"></img>
                        <div className="hiw-div4-right">
                            <p>PDF'less generated reportLorem ipsum dolor sit amet, an eripuit percipitur cum, quo sumo admodum ne. Malis nominavi no pri, an cum vidit populo. </p>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Hiw;