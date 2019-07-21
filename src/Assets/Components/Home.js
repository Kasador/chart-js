import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Home() {
    // coding block examples
    const npm = 
    `npm install --save chart.js
npm install --save react-chartjs-2`;

    const importString = "import { Bar, Line, Pie } from 'react-chartjs-2';";
    
    const jsx =
    `// example
<Bar data={...} options={{ maintainAspectRatio: false }} />
<Line data={...} options={...} />
<Pie data={...} options={...} />`;

    const importHook = "import React, { useState } from 'react';";

    const barStateSet =
    `function BarExample() {
    // set data
    const [barData, setBarData] = useState({});

    // set options
    const [barOptions, setBarOptions] = useState({});

    // return JSX
    return (
        <div className="BarExample">

        </div>
    );
}`;

    return (
        <div className="Home">
            <div className="PageTitles">
                <h1>Home</h1>
                <span>version 1.0.0</span>
            </div>
            <div className="HomeMain">
                <h1>Why?</h1>
                <p>This application is developed to help me and others learn, understand, and create charts using the ChartJS library. This library allows us to display and organize data in charts, whether that be a graph by line, bar, pie, or radar format.</p>
                <p>This is also done using ReactJS and this will serves as a guide to me and hopefully others in creating/developing beauitful charts and graphs, all while using ReactJS.</p>
                <p>I got the idea to make a guide when I was struggling to find information on how to develop and learn the library Chart.js, but in React. I found that there was a scarcity on how to go about doing so in React, and less with React Hooks & functional-based components.</p>
                <h1>How?</h1>
                <p>How we go about installing and using this library is slightly different than how we would originally implement it using a CDN or HTML5 canvas.</p>
                <p>What we need to start using ChartJS with React will require us to install a few dependencies first using the following npm packages within out React app.</p>
                <h2>npm</h2>
                <SyntaxHighlighter style={tomorrow}>
                    {npm}
                </SyntaxHighlighter>
                <h2>Example</h2>
                <p>Then after we've installed the dependencies we then can use an import method like so in any of our React components.</p>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {importString}
                </SyntaxHighlighter>
                <p>After that, we then can use each component in our return statement where we render out our JSX. The main props that we may use with our chart components are "data" and "options".</p>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {jsx}
                </SyntaxHighlighter>
                <h2>Usage</h2>
                <p>The usage examples that I give will be with React Hooks/functional-based components instead of the traditional way, with class-based components.</p>
                <p>Even if personally like using React Hooks/functional components over the older, more traditional way, the concepts are the same and could be applied to both methods.</p>
                <p>In order to make a bar chart, for an example, we will need to use the Bar component that we imported from Chart.js and make two states using the React hook "useState".</p>
                <p>However; before we are able to make/use the hook, we will need to import it like so.</p>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {importHook}
                </SyntaxHighlighter>
                <p>Now that the setup is basically done. Let's start making a chart and see how we can implement it into our React app.</p>
                <h1>Bar Chart</h1>
                <p>First, let's make our states. For our bar chart to work we will be needing two states. One is for the data and the other is for for the options and we set these within our function-based component.</p>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {barStateSet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default Home;