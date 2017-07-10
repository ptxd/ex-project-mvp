import React, { Component } from 'react';
import './product_head.css';

const product = "Civic";

class ProductHead extends Component {
    render() {
        return (
            <div className="product-title-div">
                <p className="product-name">{product}</p>
                <hr className="product-line"></hr>  
            </div>
        );
    }
}

export default ProductHead;