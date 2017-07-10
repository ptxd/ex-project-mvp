import React, { Component } from 'react';
import ProductContainer from '../containers/ProductList/ProductContainer';

class ProductDetail extends Component {
    render() {
        return (
            <div className="product-main">
                <div className="product-container">
                    <ProductContainer></ProductContainer>
                </div>    
            </div>
        );
    }
}

export default ProductDetail;