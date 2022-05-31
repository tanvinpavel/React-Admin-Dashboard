import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './lineChart.css';

const Chart = ({data}) => {
    return (
        <div className="chart">
            <h3 className='chart-title'>Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} margin={{left:5,right:10,top:10}}>
                    <CartesianGrid strokeDasharray="5 3" />
                    <XAxis dataKey={'name'} stroke="#413d8f" />
                    <YAxis stroke="#413d8f"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#c25ed4" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;