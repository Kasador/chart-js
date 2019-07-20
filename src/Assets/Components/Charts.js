import React from 'react';
import Bar from './BarChart';

function Charts() {
    return (
        <div className="Charts">
            <div className="PageTitles">
                <h1>Charts</h1>
                <span>version 1.0.0</span>
            </div>
            <div className="ChartsWrapper">
                <h1>Bar Chart</h1>
                <hr></hr>
                <Bar />
            </div>
        </div>
    );
}

export default Charts;