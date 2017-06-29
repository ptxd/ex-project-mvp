import React, {Component} from 'react';
import MultipleAreaCharts from '../containers/DashChart/DashChart';
import SearchBar from '../containers/SearchBar/SearchBarView';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="index-chart">
          <MultipleAreaCharts></MultipleAreaCharts>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Dashboard;