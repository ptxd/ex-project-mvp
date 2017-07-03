import React,{Component} from 'react';
import {Radar, RadarChart, PolarGrid, Legend,PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

class TwoLevelPieChart extends Component{
	render () {
  	return (
    	<RadarChart cx={355} cy={200} outerRadius={200} width={800} height={400} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]}/>
        </RadarChart>
    );
  }
}

export default TwoLevelPieChart;