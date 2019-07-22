import React from 'react';
import Bar from './Charts/BarChart';
import Pie from './Charts/PieChart';
import Line from './Charts/LineChart';
import Doughnut from './Charts/DoughnutChart';
import HorizontalBar from './Charts/HorizontalBarChart';
import Radar from './Charts/RadarChart';

function Charts() {
    return (
        <div className="Charts">
            <div className="PageTitles">
                <h1>Charts</h1>
                <span>version 1.0.0</span>
            </div>
            <div className="ChartsWrapper">
                {/* Bar Chart */}
                <h1>Bar Chart</h1>
                <Bar />
                {/* Horrizontal Bar Chart */}
                <h1>Horizontal Bar Chart</h1>
                <HorizontalBar />
                {/* Line Chart */}
                <h1>Line Chart</h1>
                <Line />
                {/* Pie Chart */}
                <h1>Pie Chart</h1>
                <Pie />
                {/* Doughnut Chart */}
                <h1>Doughnut Chart</h1>
                <Doughnut />
                {/* Radar Chart */}
                <h1>Radar Chart</h1>
                <Radar />
            </div>
        </div>
    );
}

export default Charts;