import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import MQ135WiringSchema from "../images/MQ135wiringdiagram.jpg";
import MQ135Lib from "../images/mq135lib.png";
import InfoCallout from "../components/InfoCallout";
import MQ135Testing from "../images/mq135testing.png"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import mediumZoom from 'medium-zoom';

const Mq135 = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    const codeBlock = `from mq135 import MQ135 
from machine import Pin 
from dht import DHT11 
mq135 = MQ135(Pin(36)) - #If you connected sensor’s AO pin with the different microcontroller’s ADC pin, change the number of pin inside the brackets with this pin.
mq135.get_rzero() - #Call this function continuously for a couple of minutes to calibrate the sensor, otherwise it won't work properly.`;

    const codeBlock1 = `dht_sensor = DHT11(Pin(16)) - #remember to which GPI pin of the microcontroller you connected DHT11’s DATA pin
dht_sensor.measure()
temperature, humidity = dht_sensor.temperature(), dht_sensor.humidity()
mq135.get_corrected_ppm(temperature, humidity)`;

    return (
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">MQ135</h1>
                <h2>Wiring a MQ135 sensor to an ESP32 microcontroller</h2>
                <p class="text">
                    Connect the 5V (also called VCC) pin of the sensor with the 5V pin of the microcontroller, the GND pin with the GND pin, and the sensor’s AO pin (analog pin) with any of the <a href="https://cdn.shopifycdn.net/s/files/1/0617/7190/7253/files/lora_v1.0_600x600.jpg?v=1665387124">ESP32‘s</a> ADC pin (I used pin number 34).
                    <br/>You can see on the diagram below that I crossed one pin. That’s DO (digital pin), which you don’t need to wire to the microcontroller.
                </p>
                <img 
                    src={MQ135WiringSchema} 
                    alt="Wiring diagram of MQ135"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <h2>Testing MQ135 sensor</h2>
                <p class="text">
                    Download <a href="https://github.com/ivanorsolic95/MQ135">the library</a> for the sensor. Upload the library to the microcontroller via ampy.
                </p>
                <img 
                    src={MQ135Lib} 
                    alt="MQ135 lib"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <section class="text">
                    <p>
                        When you’re done with the uploading of the library, close the terminal, and connect to the microcontroller via MobaXTerm, as we’ve done earlier.
                    </p>
                    <p>
                        In the terminal that is visible after the establishment of the connection, run the following commands:
                    </p>
           
                    <SyntaxHighlighter language="python" showLineNumbers>
                        {codeBlock}
                    </SyntaxHighlighter>

                    <p>
                        Open your library in the code editor, and write the last value obtained from the <i>get_rzero()</i> function in <a href="https://github.com/ivanorsolic95/MQ135/blob/master/mq135.py#L20">line 20</a> of the library, then save the change.
                    </p>
                    <p>
                        Using ampy, upload the updated library to the microcontroller. When uploading the updated library, the old version of the library will be automatically changed with the updated one.
                        <br/>Now you can use your sensor normally.
                    </p>
                    <p>
                        To have a more precise measurement of the air quality, we will provide the temperature and the humidity, measured by the DHT11 sensor, to our air quality sensor.
                    </p>
              
                    <SyntaxHighlighter language="python" showLineNumbers>
                        {codeBlock1}
                    </SyntaxHighlighter>

                    <p>
                        After the  last command is run, in the next line you should see the number, which indicates the ppm of the CO2, measured in the air.
                    </p>
                </section>
                <InfoCallout
                 infoText={'PPM stands for "parts per million." It is a way to measure how much of one substance is mixed into another. In the context of air particles, PPM tells us how many tiny particles, like dust, pollutants, or gases, are present in every million air particle. <br/>PPM helps us understand how clean or polluted the air is. Higher PPM means more particles are floating around, which could be harmful to breathe.'}
                />
                <img 
                    src={MQ135Testing} 
                    alt="MQ135 testing"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
            </div>
        </body>
    );
};

export default Mq135;

export const Head = () => <title>MQ135</title>
