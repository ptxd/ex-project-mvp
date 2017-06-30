import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSingleData} from '../../actions/product';
import ProductTracker from './ProductTrackerView';

function mapStateToProps({tracker}){
    return {tracker};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchSingleData},dispatch);
}

 var ProductTrackerContainer = connect(mapStateToProps,mapDispatchToProps)(ProductTracker);

 export default ProductTrackerContainer;
