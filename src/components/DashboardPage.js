import React, {Component} from 'react';
import MultipleAreaCharts from '../containers/DashChart/DashChart';
import SearchBarContainer from '../containers/SearchBar/SearchBarContainer';
import ProductTrackerContainer from '../containers/ProductTracker/ProductTrackerContainer';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="area-chart">
          <div className="recharts-left">
            <MultipleAreaCharts />
          </div>
           <span>
          <div className="recharts-right">    
             <MultipleAreaCharts />
          </div>  
          </span>           
        </div> 
        <div className="dash-trend-container">
          Insert component here
          asadasada<br/>
          asdadsadas
          adsadasd
        </div>
        <div className="dash-search">       
            <SearchBarContainer />
        </div>
        <div className="dash-table">
            <ProductTrackerContainer />
        </div>    
      </div>
    );
  }
}

export default Dashboard;