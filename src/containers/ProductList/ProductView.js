import React, { Component } from 'react';
import SimplePieChart from '../../components/PieChart';
import SimpleTreemap from '../../components/Treemap';
import SimpleRadialBarChart from '../../components/RadialChart';
import TwoLevelPieChart from '../../components/RadarChart';


class Product extends Component {
    constructor(props){
    super(props);
  }

  productList(product){
    console.log(product);

    const A = [product.a1,product.a2,product.a3,product.a4];
    const B = [product.b1,product.b2,product.b3,product.b4];
    const C = [product.c1,product.c2,product.c3,product.c4];
    const D = [product.d1,product.d2,product.d3,product.d4];
    const E = product.e1;
    const F = product.f1
    console.log(F);
    var z = [A,B,C,D,E,F].map((e)=>
      <div className="product-list-container">
        {e[0]}<br/>
        {e[1]}<br/>
        {e[2]}<br/>
        {e[3]}<br/>
        {e[4]}<br/>
        <TwoLevelPieChart/>
      </div>
      );

    return(z);
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
