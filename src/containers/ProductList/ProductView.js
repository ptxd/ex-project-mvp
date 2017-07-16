import React, { Component} from 'react';
import ProductHead from '../../components/product_head/product_head';
import TokenStats from '../../components/token_stats/token_stats';
import General from '../../components/general/general';
import Technical from '../../components/technical/technical';
import Links from '../../components/links/links';
import Restriction from '../../components/restrictions/restriction';
import {Grid,Row,Col} from 'react-bootstrap';


class Product extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <ProductHead></ProductHead>
          </Col>
          <Col xs={12} md={5}>
            <TokenStats></TokenStats>
          </Col>
          <Col>
            <Restriction></Restriction>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <General></General>
          </Col>
          <Col xs={6} md={4}>
            <Technical></Technical>
          </Col>
          <Col xs={6} md={4}>
            <Links></Links>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Product;
