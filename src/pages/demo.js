import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import mediumZoom from 'medium-zoom';
import MeteoStation from '../images/Demo.jpg'
import Title from "../components/Title";


const Demo = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    return (
        <body>
            <NavBar/>
            <div id='body'>
                <h1 id="main-heading">You can see my weather station in action!</h1>
                <img 
                    loading="lazy" 
                    alt="A weather station in action" 
                    src={MeteoStation} 
                    data-zoomable 
                    style={{width:'80%',
                            cursor: 'zoom-in'
                     }} 
                />
            </div>
        </body>
    );
};

export default Demo;

export const Head = () => (
    <Title/>
)

