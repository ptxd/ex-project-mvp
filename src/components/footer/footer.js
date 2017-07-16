import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright© 2017 Exstral | All Rights Reserved.</p>
            <a href="" target="_blank" className="contact-us">Contact Us</a>
            <span>
                <a href="" target="_blank">  <i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="" target="_blank"> <i className="fa fa-slack" aria-hidden="true"></i></a>
                <a href="" target="_blank">  <i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="" target="_blank">  <i className="fa fa-rebel" aria-hidden="true"></i></a>
            </span>
        </div>
    );
}; 

export default Footer;