import {connect} from  'react-redux';
import Product from './ProductView';

function mapStateToProps({product}){
    console.log({product});
    return {product};
}

 var ProductContainer = connect(mapStateToProps)(Product);

 export default ProductContainer;