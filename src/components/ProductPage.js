import React, { Component } from 'react';
import ProductContainer from '../containers/ProductList/ProductContainer';
import SideBar from '../containers/SideBar/SideBarView';

class ProductDetail extends Component {
    render() {
        return (
            <div className="product-main">
                <SideBar/>
                <div className="product-container">
                    <ProductContainer></ProductContainer>
                </div>    
            </div>
        );
    }
}

export default ProductDetail;