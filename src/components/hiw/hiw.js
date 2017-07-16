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
                    <div className="item" data-aos="zoom-out-right">1</div>
                    <div className="item" data-aos="zoom-out-left">2</div>
                </div>
                <div>
                    <div className="item" data-aos="zoom-out-right">3</div>
                    <div className="item" data-aos="zoom-out-left">4</div>
                </div>
            </div>
        );
    }
};

export default Hiw;