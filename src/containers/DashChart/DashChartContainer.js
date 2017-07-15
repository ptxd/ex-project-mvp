import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBitcoinData} from '../../actions/bitcoin';
import MultipleAreaCharts from './DashChart';

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBitcoinData},dispatch);
}

function mapStateToProps({bitcoin}){
    return {bitcoin};
}


var DashChartContainer = connect(mapStateToProps,mapDispatchToProps)(MultipleAreaCharts);

export default DashChartContainer;