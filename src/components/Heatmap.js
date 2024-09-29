import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';

const HeatmapComponent = ({ data }) => {
    return (
        <div className="heatmap-container" role="region" aria-label="Daily Swaps Heatmap">
            <h3 className="heatmap-title text-center text-lg">Daily Swaps</h3>
            <div className="heatmap" role="presentation">
                <CalendarHeatmap
                    startDate={new Date('2024-01-01')}
                    endDate={new Date('2025-01-01')}
                    values={[
                    ]}
                    classForValue={(value) => {
                        return `color-scale-${Math.ceil(Math.random() * 5)}`;
                    }}
                    titleForValue={(value) => {
                        if (!value) {
                            return 'No data';
                        }
                        return `${value.date}: ${value.count} swaps`;
                    }}
                    aria-label="Daily Swaps Heatmap"
                />
            </div>
        </div>
    );
};

export default HeatmapComponent;
