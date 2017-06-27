import React, {Component} from 'react';
import MultipleAreaCharts from '../containers/DashChart/DashChart';



class Dashboard extends Component {
  render() {
    return (
      <div className="index-chart">
         <MultipleAreaCharts></MultipleAreaCharts>
      </div>
    );
  }
}

export default Dashboard;