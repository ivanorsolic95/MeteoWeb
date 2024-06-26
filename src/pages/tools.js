import React, {useEffect} from "react";
import NavBar from "../components/NavBar"
import EspTool from '../images/esptool.png'
import EspTool2 from '../images/esptool2.png'
import EraseFlash from '../images/eraseflash.png'
import InfoCallout from '../components/InfoCallout'
import Micropythonfirmware from '../images/micropythonfirmware.png'
import Adafruit from '../images/adafruit.png'
import MobaXTerm from '../images/mobaxterm.png'
import MobaXTermTest from '../images/mobaxtermtest.png'
import mediumZoom from 'medium-zoom';
import Title from "../components/Title";

const Tools = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    return (    
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">Tools</h1>
                <h2>Esptool.py</h2>
                <p class="text">
                    Think of <i>‘esptool.py’</i> as a tool that helps you prepare and manage the microcontroller. It helps you by doing a few important tasks:
                </p>
                <ul id="list" class="text">
                    <li><b>Installing MicroPython Firmware</b>: Before your weather station can start its job, your microcontroller needs the right foundation to run your code. <i>‘Esptool.py’</i> is the tool for this job, as it installs the firmware. Think of firmware like the microcontroller's basic operating system that allows it to understand further instructions.</li>
                    <li><b>Flashing MicroPython</b>: To make programming your weather station easier and more flexible, you'll use MicroPython, a version of Python designed for microcontrollers. With <i>‘esptool.py’</i>, you flash MicroPython onto the microcontroller, giving it the ability to run your Python scripts. This is a crucial step to turn your microcontroller into a smart device capable of handling weather data.</li>
                    <li><b>Troubleshooting</b>: Sometimes things don’t go as planned, and you might need to start over. <i>‘Esptool.py’</i> can erase everything on your microcontroller, so you can try again with a clean slate.</li>
                </ul>
                <p class="text">
                    To install <i><a href="https://github.com/espressif/esptool">‘esptool.py’</a></i>, open the Terminal and run the <code><b><i>pip install esptool</i></b></code> command.
                </p>
                <img 
                    src={EspTool} 
                    alt="Esptool"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    Check if the <i>‘esptool.py’</i> is installed and works correctly by running <code><b><i>esptool --port COMX flash_id</i></b></code>. <br/>Instead of “X” in the command, write the COM port number found next to your device in Device Manager.
                </p>
                <img 
                    src={EspTool2} 
                    alt="Esptool2"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    After the command is executed, you will see some details about your microcontroller.
                </p>
                <h2>MicroPython Firmware</h2>
                <p class="text">
                    Before putting MicroPython firmware onto the ESP32 microcontroller, you should first erase the entire flash using <code><b><i>esptool --port COMX erase_flash</i></b></code> command.
                </p>
                <img 
                    src={EraseFlash} 
                    alt="Erase flash"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <section class="text">
                    <p>Then download the ESP32 MicroPython firmware and save it to a location on your computer that you are familiar with. Finally install/flash the firmware onto your microcontroller with:</p>
                    <p><code><b>esptool --chip esp32 --port COMX write_flash -z 0x1000 X:\x\micropython.bin<i></i></b></code>, where instead of “X:” and “x”, you should write your location to the micropython.bin file.</p>
                </section>
                <InfoCallout infoText={'In the context of microcontrollers and firmware, "flash" and "install" are terms often used interchangeably, but they refer to slightly different aspects of the process. I will not get into the details, as it doesn’t matter for the purpose of this tutorial.'}/>
                <img 
                    src={Micropythonfirmware} 
                    alt="Micropython firmware"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <h2>Adafruit-ampy</h2>
                <section class="text">
                    <p>Remember <i><b>that your microcontroller doesn’t know what to do with the data collected from the sensors unless you give him a set of instructions</b></i>. The instructions will be provided in the form of code saved within the files. </p>
                    <p><i>‘Adafruit-ampy’</i> is a simple command line tool that helps you send files to the microcontroller.</p>
                    <p>Install <a href="https://learn.adafruit.com/micropython-basics-load-files-and-run-code/install-ampy">'Adafruit-ampy'</a> simply by <code><b><i>pip install adafruit-ampy</i></b></code>.</p>
                </section>
                <img 
                    src={Adafruit} 
                    alt="Adafruit"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <h2>Setting up MobaXTerm for serial connection</h2>
                <section class="text">
                    <p>A serial connection allows you to check if your code is uploaded correctly, debug your project, and interact with your microcontroller through a prompt. It's a key tool for making sure everything works as expected and for troubleshooting when things go wrong.</p>
                    <p>MobaXTerm is a versatile tool that provides a user-friendly environment to establish a serial connection between your computer and the microcontroller.</p>
                    <p>Download it from <a href="https://mobaxterm.mobatek.net/">here</a>, and install it by following the instructions.</p>
                    <p>After the installation is done, open the MobaXTerm app. The first thing to do is to create a session, which will be used to establish a serial connection. To create a session:</p>
                    <ul id="list" class="text">
                        <li>Click “Session” in the upper left corner of the app window. This opens the “Session settings” window.</li>
                        <li>In the “Session settings” window, click “Serial”.</li>
                        <li>Choose the serial port of your microcontroller and set the speed to 115200 (bit/s).</li>
                        <li>Click OK to connect to your microcontroller. Your session now appears under “User sessions” for future connections to your microcontroller.</li>
                    </ul>
                    
                    <img 
                        src={MobaXTerm} 
                        alt="MobaXTerm"
                        data-zoomable 
                        style={{ cursor: 'zoom-in' }}               
                    />
                </section>
                <p class="text">
                    If you’ve successfully connected to the microcontroller, the command prompt displays in the app window. Type <code><b><i>print(”Hello World”)</i></b></code>  in the prompt and press Enter. In the next line, “Hello World” should be displayed.
                </p>
                <img 
                    src={MobaXTermTest} 
                    alt="MobaXTermTest"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">End the connection by pressing Exit in the upper right corner.</p>
            </div>
        </body>
    );
};

export default Tools;

export const Head = () => (
    <Title/>
)
