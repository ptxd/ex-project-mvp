import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProductData} from '../../actions/index';
import SearchBar from './SearchBarView';

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchProductData},dispatch);
}

var SearchBarContainer = connect(null,mapDispatchToProps)(SearchBar);

export default SearchBarContainer;