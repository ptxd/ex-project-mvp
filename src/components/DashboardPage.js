import React, {Component} from 'react';
import MultipleAreaCharts from '../containers/DashChart/DashChart';
import SearchBarContainer from '../containers/SearchBar/SearchBarContainer';
import ProductTrackerContainer from '../containers/ProductTracker/ProductTrackerContainer';
import TableList from './table';
import SideBar from '../containers/SideBar/SideBarView';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-side-bar">
          <SideBar></SideBar>
        </div>
        <div className="dashboard-container">
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
          <div className="tracker-wrapper">
              <SearchBarContainer /> 
              <ProductTrackerContainer />
          </div>
          <div className="table-list">
            <TableList/>
          </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;


  //  <div className="dash-trend-container">
  //         <TableList></TableList>
  //         </div>
          
        
