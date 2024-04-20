import React, {useEffect} from "react";
import NavBar from '../components/NavBar'
import AlertCallout from '../components/AlertCallout'
import OledLib from '../images/oledlib.png'
import CheckOledLib from '../images/checkoledlib.png'
import TipCallout from '../components/TipCallout'
import TestDisplay from '../images/testdisplay.png'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { white} from "react-syntax-highlighter/dist/esm/styles/hljs";
import mediumZoom from 'medium-zoom';

const Oled = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    const codeBlock = `from machine import Pin, SoftI2C 
import ssd1306 
i2c = SoftI2C(scl=Pin(15), sda=Pin(4))
rst = Pin(16, Pin.OUT) 
rst.value(1) 
oled = ssd1306.SSD1306_I2C(128, 64, i2c) 
oled.fill(0) 
oled.text('Hello World', 0, 0)
oled.show()`;

    return (
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">Testing OLED display</h1>
                <p className="text">
                    This section of the tutorial is optional and designed for those who want to test the OLED display connected to their microcontroller. While you don’t need an OLED for your weather station, it’s helpful and convenient for showing stuff like temperature and humidity readings. If you’ve got one, this test will help you make sure it’s working properly.
                </p>
                <h2>OLED display library</h2>
                <p className="text">
                    The first step is to download <a href="https://github.com/adafruit/micropython-adafruit-ssd1306">the library</a> for the display, and save it to a location on your computer that you are familiar with. To upload the library onto the microcontroller,  open the terminal and run <code><b><i>ampy --port COMX --baud 115200 put x:\location\ssd1306.py</i></b></code>, where “X” should be switched with the port number, and “x:\location\” with the actual location of the ssd1306.py file.
                </p>
                <AlertCallout alertText={'Before uploading the library via ampy in the terminal, ensure to close the session in MobaXTerm, as only one program can use the connection to the microcontroller at a time.'}/>
                <img 
                    src={OledLib} 
                    alt="Oled library"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    To check if the library is successfully uploaded, connect to the microcontroller via MobaXTerm. In the command prompt, run <code><b><i>import os</i></b></code>, than <code><b><i>os.listdir()</i></b></code>. You should see <b>“['boot.py', 'ssd1306.py']˙ ”</b> in the next line.
                </p>
                <img 
                    src={CheckOledLib} 
                    alt="Oled library check"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <h2>Showing text on display </h2>

                <SyntaxHighlighter language="python" style={white} showLineNumbers>
                    {codeBlock}
                </SyntaxHighlighter>

                <TipCallout tipText={'Notice in the third line that the SCL and SDA pins of my microcontroller are 15 and 4.  If you have a different microcontroller, it’s possible that the pins are not the same. Check your microcontroller’s documentation to see its SCL and SDA pins.'}/>
                <img 
                    src={TestDisplay} 
                    alt="Testing display"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">Take a look at your microcontroller’s display. You should see <b>“Hello World”</b> displayed on it.</p> 
            </div>
        </body>
    );
};

export default Oled;