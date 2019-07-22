import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';

function RadarChart() {
    // set data
    const [chartData, setChartData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: 'Red',
                data: [
                    23,
                    65,
                    98,
                    12
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Blue',
                data: [
                    41,
                    60,
                    78,
                    32
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Yellow',
                data: [
                    73,
                    20,
                    17,
                    45
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderWidth: 3
            },
            {
                label: 'Green',
                data: [
                    44,
                    89,
                    63,
                    71
                ],
                backgroundColor: [
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
                text: 'Data Orgranized In Radar',
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
        <div className="RadarChart">
            <Radar
                data={chartData}
                options={options.options} />
        </div>
    );
}

export default RadarChart;