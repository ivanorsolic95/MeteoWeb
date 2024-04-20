import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import BMP180WiringSchema from "../images/BMP180wiringdiagram.jpg";
import TipCallout from "../components/TipCallout";
import SensorAddress from "../images/sensoraddress.png";
import Bmp180Lib from "../images/BMP180lib.png";
import Bmp180Test from "../images/bmp180test.png";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { white} from "react-syntax-highlighter/dist/esm/styles/hljs";
import mediumZoom from 'medium-zoom';


const Bmp180 = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    const codeBlock = `from bmp085 import BMP180 
from machine import SoftI2C, Pin 
i2c = SoftI2C(scl=Pin(22), sda=Pin(21))
bmp = BMP180(i2c)
bmp.oversample = 2
bmp.sealevel = 101325 
bmp.blocking_read()
bmp.temperature #in the next line, you should see the measured temperature
bmp.pressure #in the next line, you should see the measured pressure
bmp.altitude #in the next line, you should see the measured altitude`;

    return (
        <body>
            <NavBar/>
            <div id="body"> 
                <h1 id="main-heading">BMP180</h1>
                <h2>Wiring a BMP180 sensor to an ESP32 microcontroller</h2>
                <p class="text">
                    Like with every sensor, use the <a href="https://cdn.shopifycdn.net/s/files/1/0617/7190/7253/files/lora_v1.0_600x600.jpg?v=1665387124">PINOUT diagram of ESP32</a> to make sure of the microcontroller’s pins’ names.

                    <br/>Connect the sensor’s GND pin with the GND pin of the microcontroller, 3.3V pin with the 3.3V pin, SDA pin of the sensor with the SDA pin of the microcontroller <br/>(on the PINOUT diagram marked as the 21), and finally the sensor’s SCL pin with the microcontroller’s SCL pin (marked as the 22).
                </p>
                <img 
                    src={BMP180WiringSchema} 
                    alt="Wiring diagram of BMP180"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <h2>Testing BMP180 sensor</h2>
                <section class="text">
                    <p>Download the <a href="https://github.com/robert-hh/BMP085_BMP180/blob/master/bmp085.py">BMP180 library</a> for the sensor. Before uploading the library to the microcontroller, take a look at <a href="https://github.com/robert-hh/BMP085_BMP180/blob/de8aeb4c849979ae865ed2214507c252eb36026e/bmp085.py#L55">line 55</a> of the library.</p>
                    <SyntaxHighlighter language="python" style={white} showLineNumbers>self._bmp_addr = 119  # fix</SyntaxHighlighter>
                    <p>119 is the sensor’s address on the microcontroller. This address is very important, as it allows the microcontroller to communicate specifically with that sensor, which is key when you need to read data from the sensor or send him commands on how to behave.</p>
                    <p>Your sensor’s address on your microcontroller can differ from this one, so do the following to check the address:</p>
                    <ul id="list">
                        <li>Using MobaXTerm, connect to the microcontroller.</li>
                        <li>In the command prompt that appears after the connection, run the following commands, one by one:
                            <ul>
                                <li><SyntaxHighlighter language="python" style={white}>import machine</SyntaxHighlighter></li>
                                <li><SyntaxHighlighter language="python" style={white}>bmp180 = machine.SoftI2C(sda=machine.Pin(21), scl=machine.Pin(22))</SyntaxHighlighter></li>
                                <li><SyntaxHighlighter language="python" style={white}>bmp180.scan()</SyntaxHighlighter></li>
                            </ul>
                        </li>
                    </ul>
                    <p>After the last command is run, in the next line you should see <b>“[”the sensor’s address”]”</b>. </p>
                </section>
                <TipCallout tipText={"The address of my sensor is 119, just like in the library. If your sensor's address is different, replace 119 with this address and save the change."}/>
                <img 
                    src={SensorAddress} 
                    alt="Address of BMP180 sensor"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    Now upload the library to the microcontroller, just like the other libraries, using ampy.
                </p>
                <img 
                    src={Bmp180Lib} 
                    alt="BMP180 library"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    To test if sensor is working, connect to the microcontroller again and run the following commands in the terminal:
                </p>
   
                <SyntaxHighlighter language="python" style={white} showLineNumbers>
                    {codeBlock}
                </SyntaxHighlighter>

                <img 
                    src={Bmp180Test} 
                    alt="BMP180 testing code"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    According to the <a href="https://github.com/robert-hh/BMP085_BMP180/blob/master/README.md">documentation</a>, the temperature is expressed in degrees C, the pressure in hPa, and the altitude in meters.
                </p>
            </div>
        </body>
    );
};

export default Bmp180;

export const Head = () => <title>BMP180</title>
