import React from 'react';
import Graph from '../Components/Graph';

function Charts() {
    return (
        <div className="Charts">
            <div className="PageTitles">
                <h1>Charts</h1>
                <span>version 1.0.0</span>
            </div>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Graph />
        </div>
    );
}

export default Charts;