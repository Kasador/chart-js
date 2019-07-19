import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Home() {
    // coding block examples
    const npm = 
    `npm install --save chart.js
npm install --save react-chartjs-2`;
    const example = 
    `function test() {
    let testVar = 23;
};`;
    return (
        <div className="Home">
            <div className="PageTitles">
                <h1>Home</h1>
                <span>version 1.0.0</span>
            </div>
            <div className="HomeMain">
                <h1>Why?</h1>
                <p>This application is meant to be a guide in helping me learn and understand the ChartJS library to display and organize data in charts, whether that be a graph in line, bar, pie, or radar format. This is also done in ReactJS and not the traditional JavaScript way.</p>
                <h1>How?</h1>
                <p>How we go about installing and using this library is slightly different than how we would originally implement it using a CDN or HTML5 canvas.</p>
                <p>What we need to start using ChartJS with React will require us to install a few dependencies first using the following npm packages.</p>
                <h2>npm</h2>
                <SyntaxHighlighter style={tomorrow}>
                    {npm}
                </SyntaxHighlighter>
                <p>What we need to start using ChartJS with React will require us to install a few dependencies first using the following npm packages.</p>
            </div>
        </div>
    );
}

export default Home;