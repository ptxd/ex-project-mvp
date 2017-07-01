import React, {Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import * as data from './temp_data'; 

// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];

class MultipleAreaCharts extends Component{
	render () {
  	return (
        <AreaChart width={750} height={300} data={data.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1bc98e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1bc98e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1ca8dd" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1ca8dd" stopOpacity={0}/>
            </linearGradient>
          </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" fill="rgba(37, 40, 48, 0.3)" vertical={false} horizontal={false}/>
            <Tooltip />
          <Area type="monotone" dataKey="bitcoin" stroke="#1bc98e" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="ether" stroke="#1ca8dd" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    );
  }
}

export default MultipleAreaCharts;