import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
} from 'recharts';
import Heatmap from 'react-heatmap-calendar';

const App = () => {
    const [data, setData] = useState([]);
    const [heatmapData, setHeatmapData] = useState([]);

    useEffect(() => {
        // Fetch data for the charts and heatmap
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                const result = await response.json();
                setData(result.chartData);
                setHeatmapData(result.heatmapData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to the Progress Tracker</h1>
                <div className="charts-container">
                    <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                    <PieChart width={600} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="pv"
                        />
                    </PieChart>
                </div>
                <div className="heatmap-container">
                    <h2 className="heatmap-title">Swaps Made Each Day</h2>
                    <Heatmap
                        data={heatmapData}
                        showTooltip
                        colors={['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']}
                        startDate={new Date('2023-01-01')}
                        endDate={new Date()}
                        showWeekdayLabels
                        showMonthLabels
                        showYearLabels
                        showColorLegend
                        colorLegendOrientation="horizontal"
                        colorLegendPosition="bottom"
                        colorLegendTitle="Swaps"
                    />
                </div>
            </header>
        </div>
    );
};

export default App;
