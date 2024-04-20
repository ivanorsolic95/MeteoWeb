import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import InfoCallout from "../components/InfoCallout";
import TipCallout from "../components/TipCallout";
import AlertCallout from "../components/AlertCallout";
import DeviceManager from "../images/devicemanager.png"
import PortProperties from "../images/portproperties.png"
import Port from "../images/port.jpg"
import mediumZoom from 'medium-zoom';

const Configuration = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);
    
    return (
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">Now it’s time to start with building a weather station and make things happen!</h1>
                <p class="text">
                    Before connecting sensors to the microcontroller and starting to take measurements, you should configure the microcontroller and install the necessary software.
                </p>
                <h2>Connecting microcontroller to your laptop/PC</h2>
                <p class="text">
                    In order to do anything with our microcontroller, it needs to be connected to the PC/laptop. ESP32 microcontroller has a USB port, so connect your microcontroller to the PC/laptop via a micro USB cable.

                    <br/>A COM port is essentially a serial port on a computer used for serial connection, meaning data is sent over a single wire, bit by bit. This is in contrast to parallel connection, where multiple wires are used to send data bits simultaneously. In the early days of computing, serial ports were used for connecting mice, modems, and other peripherals, but in modern contexts, they're often used for programming microcontrollers and debugging them.
        
                    <br/>When you're working on an IoT project, you typically write code on your computer that tells the microcontroller what to do. However, to transfer this code from your computer to the microcontroller, you need a communication channel, and that's where the COM port comes in. Through a USB connection, your microcontroller connects to your computer's COM port, allowing you to upload your code directly to the device.
                </p>
                <InfoCallout infoText={'To find the COM port required to connect the microcontroller to the computer, follow these steps:'}/>
                <p class="text">
                    Open Device Manager: Search bar → type “Device Manager” → click on the “Device Manager” app.
                </p>
                <img 
                    loading="lazy" 
                    src={DeviceManager} 
                    alt="Device Manager"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    Under the section Ports (COM & LPT), you should see your microcontroller. My microcontroller was under the name “<b>Silicon Labs CP210x USB to UART Bridge (COM 5)</b>”.
                </p>        
                <img 
                    loading="lazy" 
                    src={Port} 
                    alt="Port in Device Manager"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <TipCallout tipText={'If you don’t know which device is your microcontroller, just unplug it,  plug it in again, and pay attention to which device reappears after plugging in!'}/>
                <p class="text">
                    Notice that it says “(COM5)”  to the right of my microcontroller’s name. This is the COM port I used to establish a serial connection between it and my computer.
                </p>
                <AlertCallout alertText={'When you open Device Manager, there is a good chance that a yellow triangle will appear next to your device. Nothing to worry about, the most common cause is missing or incorrect drivers.'}/>
                <p class="text">
                    To fix this problem, search for the drivers for your microcontroller on the Internet using the device name or the hardware ID of the device, and install them.
                </p>
                <img 
                    loading="lazy" 
                    src={PortProperties} 
                    alt="Port property"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
                <p class="text">
                    I found the drivers for my microcontroller by copying the hardware ID from Device Manager and Googleing it. The first result was <a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads">this page</a>. If you’re using an ESP32 like me, you can just do the following:
                </p>
                <ul id="list" class="text">
                    <li>Download the <a href="https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip">Universal Windows Driver</a> (or the <a href="https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip">OS X driver</a> if you’re on Mac).</li>
                    <li>Unzip the driver.</li>
                    <li>
                        Install the driver. On Windows, the steps are:
                        <ul>
                            <li>In Device Manager, right-click on the device → Update driver →  Browse my computer for drivers → Navigate to the unzipped folder → Follow the prompts to install the driver.</li>
                        </ul>
                    </li>
                    <li><b><u>Write down the COM port next to your device, as you will need it later.</u></b></li>
                </ul>
                <p class="text">
                    Once the microcontroller and computer are connected, let’s continue with installing required tools.
                </p>
            </div>
        </body>
    );
};

export default Configuration;

export const Head = () => <title>Configuration</title>
