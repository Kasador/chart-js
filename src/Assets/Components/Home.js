import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

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

    const barStateData = 
    `// set data
const [barData, setBarData] = useState({
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    datasets: [
        {
            label: 'test label',
            data: [
                48,
                35,
                73,
                82
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderWidth: 3
        }
    ]
});
// set options
const [barOptions, setBarOptions] = useState({
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        },
        title: {
            display: true,
            text: 'Data Orgranized In Bars',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'top'
        }
    }
});`;

    const barProps =
    `// return chart
return (
    <div className="BarExample">
        <Bar
            data={chartData}
            options={options.options} />
    </div>
);`;

    // styles for link
    const styleLink = {
        color: "#777"
    }

    return (
        <div className="Home">
            <div className="PageTitles">
                <h1>Docs</h1>
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
                <h2>useState Hook</h2>
                <p>The usage examples that I give will be with React Hooks/functional-based components instead of the traditional way, with class-based components.</p>
                <p>Even if personally like using React Hooks/functional components over the older, more traditional way, the concepts are the same and could be applied to both methods.</p>
                <p>In order to make a bar chart, for an example, we will need to use the Bar component that we imported from Chart.js and make two states using the React hook "useState".</p>
                <p>However; before we are able to make/use the hook, we will need to import it like so.</p>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {importHook}
                </SyntaxHighlighter>
                <p>Now that the setup is basically done. Let's start making a chart and see how we can implement it into our React app.</p>
                <h1>Usage</h1>
                <p>First, let's make our states. For our bar chart to work we will be needing two states. One is for the data and the other is for for the options and we set these within our function-based component.</p>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {barStateSet}
                </SyntaxHighlighter>
                <p>After we set our state, we then start to define our information required for us to display our chart. The example below is the information for the bar chart defined with key-pair values. These keys are required to be spelled exactly like they are. In other words, I could not name "data" to "pizza", because it wouldn't work.</p>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {barStateData}
                </SyntaxHighlighter>
                <p>After we've defined our data and options we wish to use in our bar chart, we then can pass the states through our props in our bar component like this.</p>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {barProps}
                </SyntaxHighlighter>
                <p>See all the examples in the <Link to="/charts" style={styleLink}>charts</Link> page. This concept will be the same for the other charts as well. So, if we want to make a pie chart, we will repeat the steps above. However, depending on the chart you wish to make there will be some variation in data and options we define. For more information about each chart, feel free to look at the ChartJS documentation <a href="https://www.chartjs.org/docs/latest/" rel="noopener noreferrer" target="_blank" style={styleLink}>here</a>.</p>
                <p>Hope this helps for all those who wish to use ReactJS with ChartJS.</p>
                <p style={{fontWeight: "900", fontSize: "1.5rem", fontStyle: "Oblique"}}> --Thanks y'all! &#38;&#38; happy coding!</p>
            </div>
        </div>
    );
}

export default Home;