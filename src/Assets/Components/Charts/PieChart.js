import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart() {
    // set data
    const [chartData, setChartData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: 'Dataset Label',
                data: [
                    88,
                    50,
                    23,
                    42
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
                text: 'Data Orgranized In Pie',
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
        <div className="PieChart">
            <Pie
                data={chartData}
                options={options.options} />
        </div>
    );
}

export default PieChart;