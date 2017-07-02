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
        <Col sm={6} md={3}>
          <Panel header={title} key={title} bsStyle="info">
              {content}
          </Panel>
        </Col>
        );
  }

  render() {
    return (
      <div className="product-container-div">
        <Grid>
          <Row className="show-grid">
              {this.props.product.map((e)=>e.map(this.productList))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Product;
