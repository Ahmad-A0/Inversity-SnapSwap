import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';

const HeatmapComponent = ({ data }) => {
    return (
        <div className="heatmap-container">
            <div className="heatmap">
                <CalendarHeatmap
                    startDate={new Date('2024-01-01')}
                    endDate={new Date('2025-01-01')}
                    values={[
                        { date: '2016-01-01', count: 12 },
                        { date: '2016-01-22', count: 122 },
                        { date: '2016-01-30', count: 38 },
                        // ...and so on
                    ]}
                />
            </div>
        </div>
    );
};

export default HeatmapComponent;
