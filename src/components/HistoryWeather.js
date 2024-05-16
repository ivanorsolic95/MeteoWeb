import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoryWeather = ({ data }) => {
    if (data.length === 0) return null;

    const chartData = {
        labels: data.map(entry => {
            const time = entry.time[0];
            return new Date(time[0], time[1] - 1, time[2], time[3], time[4], time[5]).toLocaleTimeString();
        }),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: data.map(entry => entry.temperature[0]),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Pressure (hPa)',
                data: data.map(entry => entry.pressure[0]),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
            {
                label: 'CO2 PPM',
                data: data.map(entry => entry.co2_ppm[0] > 500 ? 457 : entry.co2_ppm[0]),
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
            },
            {
                label: 'Humidity (%)',
                data: data.map(entry => entry.humidity[0]),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'History Data',
            },
        },
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default HistoryWeather;
