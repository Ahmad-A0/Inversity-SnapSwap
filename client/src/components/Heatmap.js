import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';

const generateRandomValues = (startDate, endDate) => {
    const values = [];
    const currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        const count = Math.floor(Math.random() * 100); // Random count between 0 and 99
        values.push({ date: currentDate.toISOString().split('T')[0], count });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return values;
};

const HeatmapComponent = ({ data }) => {
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2025-01-01');
    const values = generateRandomValues(startDate, endDate);

    return (
        <div className="heatmap-container">
            <div className="heatmap">
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={values}
                />
            </div>
        </div>
    );
};

export default HeatmapComponent;
