import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
    // set data
    const [chartData, setChartData] = useState({
        labels: ['Blue', 'Yellow', 'Green', 'Red'],
        datasets: [
            {
                label: 'Dataset Label',
                data: [
                    38,
                    93,
                    53,
                    12
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 5
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
                text: 'Data Orgranized In Doughnut',
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
        <div className="DoughnutChart">
            <Doughnut
                data={chartData}
                options={options.options} />
        </div>
    );
}

export default DoughnutChart;