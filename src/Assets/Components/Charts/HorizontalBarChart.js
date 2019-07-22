import React, { useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function HorizontalBarChart() {
    // set data
    const [chartData, setChartData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: 'Dataset Label',
                data: [
                    28,
                    85,
                    53,
                    92
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
                text: 'Data Orgranized In Horizontal Bars',
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
        <div className="HorizontalBarChart">
            <HorizontalBar
                data={chartData}
                options={options.options} />
        </div>
    );
}

export default HorizontalBarChart;