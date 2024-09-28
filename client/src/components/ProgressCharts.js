import React from 'react';
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
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';
import HeatmapComponent from './Heatmap';

const ProgressCharts = ({ caloriesSavedData, macroBreakdownData, colors }) => {
    const swapData = [
        { date: '2023-10-25', swaps: 15 },
        { date: '2023-10-26', swaps: 20 },
        { date: '2023-10-27', swaps: 5 },
        { date: '2023-10-28', swaps: 18 },
        { date: '2023-10-29', swaps: 12 },
        // Add more data as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
            role="region"
            aria-label="Progress Charts"
        >
            <h3 className="text-3xl font-serif text-center mb-8 text-yellow-300">
                Your Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-yellow-300 mb-4">
                        Calories Saved
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={caloriesSavedData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            aria-label="Calories Saved Chart"
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#555"
                            />
                            <XAxis dataKey="date" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#333',
                                    border: 'none',
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="caloriesSaved"
                                stroke="#FFD700"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-yellow-300 mb-4">
                        Macronutrient Breakdown
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart aria-label="Macronutrient Breakdown Chart">
                            <Pie
                                data={macroBreakdownData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {macroBreakdownData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors[index % colors.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#333',
                                    border: 'none',
                                }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="my-10">
                {' '}
                <ResponsiveContainer
                    className="mx-auto bg-gray-800 p-6   rounded-xl shadow-lg"
                    width="80%"
                    height="20%"
                >
                    <HeatmapComponent data={swapData} />
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default ProgressCharts;
