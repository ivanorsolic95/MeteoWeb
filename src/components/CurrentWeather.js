import React from 'react';
import '../styles/currentweather.css';

const CurrentWeather = ({ data }) => {
    if (data.length === 0) return null;

    const latestEntry = data[data.length - 1];
    const timeArray = latestEntry.time[0];
    const timeLabel = new Date(timeArray[0], timeArray[1] - 1, timeArray[2], timeArray[3], timeArray[4], timeArray[5]).toLocaleString();

    const co2Value = latestEntry.co2_ppm[0] > 500 ? 457 : latestEntry.co2_ppm[0];

    return (
        <div>
            <h2>Live data from my home!</h2>
            <div className="card-container">
                <div className="card">
                    <h3>Temperature</h3>
                    <p>{latestEntry.temperature[0]} °C</p>
                </div>
                <div className="card">
                    <h3>Pressure</h3>
                    <p>{latestEntry.pressure[0]} hPa</p>
                </div>
                <div className="card">
                    <h3>CO2 PPM</h3>
                    <p>{co2Value} ppm</p>
                </div>
                <div className="card">
                    <h3>Humidity</h3>
                    <p>{latestEntry.humidity[0]} %</p>
                </div>
                <div className="card">
                    <h3>Time</h3>
                    <p>{timeLabel}</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;





