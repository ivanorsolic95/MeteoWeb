import React, { useEffect } from "react";
import NavBar from "../components/NavBar"
import InfoCallout from "../components/InfoCallout"
import WeatherStation from '../images/weatherstation.jpg'
import Footer from "../components/Footer"
import mediumZoom from 'medium-zoom';

const mainHeader = "Build your own weather station!"
const infoText = "Don't worry, I will explain what the microcontroller is, why you need it, what type of sensors you need, and where to buy them."

const HomePage = () => {
  useEffect(() => {
    const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
    return () => zoom.detach();
  }, []);

  return (
    <body>
      <NavBar></NavBar>
      <div id="body">
        <h1 id="main-heading">{mainHeader}</h1>
        <p className="text">
          I've made a tutorial on how to make a simple weather station able to measure temperature, humidity, air pressure, and air quality.<br/>
          This tutorial is aimed at anyone who has a basic knowledge of programming and is willing to learn how to make their own things using hardware components such as the microcontroller and the sensors.
        </p>
        <InfoCallout infoText={infoText}></InfoCallout>
        <img 
          loading="lazy" 
          alt="A weather station" 
          src={WeatherStation} 
          data-zoomable 
          style={{ cursor: 'zoom-in' }} 
        />
      </div>
      <Footer></Footer>
    </body>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
