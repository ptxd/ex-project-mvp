import React, { Component } from 'react';
import ProductContainer from '../containers/ProductList/ProductContainer';

class ProductDetail extends Component {
    render() {
        return (
            <div className="product-main">
                <div className="product-container">
                    <ProductContainer></ProductContainer>
                </div>    
                <br/>
                <div className="comment-list-container">
                    This is a test div for additional comments
                </div>
            </div>
        );
    }
}

export default ProductDetail;