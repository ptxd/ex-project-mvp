import React, { Component,createElement } from 'react';
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
    var q = <SimplePieChart/>;
    var k =<SimpleTreemap />;
    var s = <SimpleRadialBarChart />;
    var t = <TwoLevelPieChart />;

    const A = [product.a1,product.a2,product.a3];
    const B = [k];
    const C = [s];
    const D = [t];
    const E = [q];
    const F = ['unknown data structure var k=<div/>'];
    console.log(F);
    var z = [A,B,C,D,E,F].map((e)=>
      <div className="product-list-container">
        {e[0]}<br/>
        {e[1]}<br/>
        {e[2]}<br/>
        {e[3]}<br/>
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
