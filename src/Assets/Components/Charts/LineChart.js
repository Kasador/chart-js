import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
    // set data
    const [chartData, setChartData] = useState({
        labels: ['Yellow', 'Blue', 'Red', 'Green'],
        datasets: [
            {
                label: 'Yellow',
                fill: false,
                data: [
                    38,
                    93,
                    53,
                    12
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Blue',
                fill: false,
                data: [
                    82,
                    12,
                    90,
                    67
                ],
                borderColor: [
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Red',
                fill: false,
                data: [
                    22,
                    32,
                    70,
                    37
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Green',
                fill: false,
                data: [
                    92,
                    32,
                    30,
                    97
                ],
                borderColor: [
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    });
    // set options
    const [options, setOptions] = useState({
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
                text: 'Data Orgranized In Lines',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    });

    // return chart
    return (
        <div className="LineChart">
            <Line
                data={chartData}
                options={options.options} />
        </div>
    );
}

export default LineChart;