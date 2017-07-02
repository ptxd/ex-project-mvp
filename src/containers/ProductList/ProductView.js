import React, { Component } from 'react';
import {Grid,Col,Row,Panel} from 'react-bootstrap';

class Product extends Component {
    constructor(props){
    super(props);
  }

  productList(product){
    console.log(product);
    const title = product.title;
    const content = product.content;

    return(
        <div className="product-list-container">
            {title}
            <br/>
            {content}
        </div>
        );
  }

  render() {
    return (
      <div className="product-container-div">
              {this.props.product.map((e)=>e.map(this.productList))}
      </div>
    );
  }
}

export default Product;
