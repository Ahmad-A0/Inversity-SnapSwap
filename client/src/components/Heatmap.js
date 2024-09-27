import React from 'react';
import { Heatmap } from 'recharts';

const HeatmapComponent = ({ data }) => {
  return (
    <div className="heatmap-container">
      <h3 className="heatmap-title">Daily Swaps</h3>
      <div className="heatmap">
        <Heatmap
          data={data}
          width={600}
          height={400}
          colors={['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']}
          cell={{ width: 50, height: 50 }}
          stroke="#fff"
          strokeWidth={1}
        />
      </div>
    </div>
  );
};

export default HeatmapComponent;
