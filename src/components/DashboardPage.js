import React, {Component} from 'react';
import MultipleAreaCharts from '../containers/DashChart/DashChart';
import SearchBarContainer from '../containers/SearchBar/SearchBarContainer';
import ProductTrackerContainer from '../containers/ProductTracker/ProductTrackerContainer';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
          <MultipleAreaCharts />
          <SearchBarContainer />
          <ProductTrackerContainer />
      </div>
    );
  }
}

export default Dashboard;