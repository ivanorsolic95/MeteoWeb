import React from "react";
import NavBar from '../components/NavBar'
import Breadboard from '../images/breadboard.jpg'
import ImageWithCaption from '../components/ImageWithCaption'
import Breadboard1 from '../images/breadboard1.jpg'
import Breadboard2 from '../images/breadboard2.jpg'
import DHTWiringSchema from '../images/DHT11-schema.jpg'
import DHTCodeTest from '../images/dht11codetesting.png'

const Dht11 = () => {
    return (
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">DHT11</h1>
                <h2>Breadboard</h2>
                <p class="text">
                    Before you start to wire sensors to the microcontroller, I would explain what’s the breadboard and how does it work, because I used it to wire my sensors to the microcontroller.
                </p>
                <p class="text">
                    A breadboard is a tool used in electronics to build and test circuits without soldering. It's like a reusable platform where you can connect electronic components, such as sensors and wires, to create circuits quickly and easily.
                </p>
                <img src={Breadboard} alt="Breadboard"></img>
                <p class="text">
                    It has rows and columns of holes, with metal strips underneath that connect them together.

                    <br/>Note how all holes in the selected row are connected together, so the holes in the selected column. The set of connected holes can be called a node:
                </p>
                <ImageWithCaption
                    imageSource={'https://wiring.org.co/learning/tutorials/breadboard'}
                    imageFolderSource={Breadboard1}
                    imageAlt={'Breadboard explanation'}
                />
                <p class="text">To interconnect the selected row (node A) and column (node B) a cable going from any hole in the row to any hole in the column is needed:</p>
                <ImageWithCaption
                    imageSource={'https://wiring.org.co/learning/tutorials/breadboard'}
                    imageFolderSource={Breadboard2}
                    imageAlt={'Breadboard explanation'}
                />
                <p class="text">
                    Breadboards are great because they allow you to experiment with different circuit designs without needing special tools or making permanent connections.
                    <br/>You can rearrange components like sensors and microcontroller and try out different ideas until you find the one that works best.
                </p>
                <h2>Wiring a DHT11 sensor to an ESP32 microcontroller</h2>
                <section>
                    <p class="text">Connecting a DHT11 sensor to an ESP32 is pretty easy. Begin by placing the ESP32 on your breadboard, making sure that each side of the ESP32 is on a different side of the breadboard.</p>
                    <p class="text">Place the sensor on your breadboard. Connect the sensor’s DATA pin to any of the free GPI pins (I used pin 16). Check the <a href="https://cdn.shopifycdn.net/s/files/1/0617/7190/7253/files/lora_v1.0_600x600.jpg?v=1665387124">PINOUT diagram of ESP32 </a> to find out the name of the pins. </p>
                    <p class="text">Continue with connecting the VCC pin to the ESP32’s 5V or 3.3V pin, and finally, the GND pin to the GND pin of the microcontroller.</p>
                </section>
                <img src={DHTWiringSchema} alt="Wiring schema of DHT11"></img>
                <h2>Testing DHT11 sensor</h2>
                <p class="text">
                    Usually you have to download the sensor’s library and upload it to the microcontroller, as you will do with the two other sensors. Luckily for you, the DHT11’s library is included in recent versions of MicroPython, so you already have this library on your microcontroller.

                    <br/>To test if sensor is working, connect to the microcontroller and run the following commands in the terminal:
                </p>
                <pre><code>
                    import dht 
                    import machine 
                    d = dht.DHT11(machine.Pin(16)) #if you connected the sensor's DATA pin to another GPI pin, change 16 with the number of that pin
                    d.measure() 
                    d.temperature() #you should see the temperature as the output of this function
                    d.humidity() #you should see the humidity as the output of this function 
                </code></pre>
                <img src={DHTCodeTest} alt="Testing of DHT11"></img>
            </div>
        </body>
    );
};

export default Dht11;

export const Head = () => <title>DHT11</title>
