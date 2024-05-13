import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import TipCallout from "../components/TipCallout";
import InfoCallout from "../components/InfoCallout";
import WeatherStation from "../images/weatherstationinwork.png";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import mediumZoom from 'medium-zoom';
import Title from "../components/Title";

const Code = () => {
    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0 });
        return () => zoom.detach();
      }, []);

    const codeString =`import time
import network
import ntptime
from machine import Pin`;

    const codeString2 = `class Microcontroller:
    def __init__(self, SSID, KEY):
        print(f"Initialising the Microcontroller.")
        self.SSID = SSID
        self.KEY = KEY
        self.sta_if = network.WLAN(network.STA_IF)
        self.connectToWifi()
        self.setTime()
        self.setResetPin()`;
    
    const codeString3 = `def connectedToWifi(self):
    return self.sta_if.isconnected()`;                    
    
    const codeString4 = `def connectToWifi(self):
    if not self.connectedToWifi():
        try:
            print(f"Enabling WiFi on the Microcontroller.")
            self.sta_if.active(True)
            print(f"Connecting to {self.SSID}.")
            self.sta_if.connect('self.SSID, self.KEY')
            while not self.sta_if.isconnected():
                pass
            print(f"WiFi connected successfully: {self.sta_if.ifconfig()}")
        except Exception as e:
            print(f"Could not connect to the WiFi. Error: {e}")
    else:
        print(f"WiFi already connected.")`;

    const codeString5 = `def setTime(self):
    if not self.connectedToWifi():
        print(
            f"First connect to the internet to set the time using NTP.")
        print(f"Trying to connect automatically for you.")
        self.connectToWifi()
    else:
        print(f"Automatically setting the time using NTP.")
        ntptime.settime()
        print(f"The current local time is: {time.localtime()}")`;

    const codeString6 = `def setResetPin(self):
    print(f"Setting the reset pin to HIGH so the OLED can work.")
    try:
        reset_pin = Pin(4)
        reset_pin.value(1)
        print(f"Reset pin set to HIGH successfully.")
    except Exception as e:
        print(f"Error while setting reset pin to HIGH: {e}")    `;                                
    
    const codeString7 = `from microcontroller import Microcontroller
SSID = "YourNetworkName"
PASSWORD = "YourPassword"
microcontroller = Microcontroller(SSID, PASSWORD)`;                            

    const codeString8 = `import urequests
import ujson as json`;                                

    const codeString9 = `if not payload:
print("Payload is empty or None. Not sending.")
return`;                                
    
    const codeString10 = `response = urequests.post(
    url="https://maker.ifttt.com/trigger/esp32_measurement/json/with/key/'yourwebhookkey'",
    data=json.dumps(payload),
    headers=headers)`;
    
    const codeString11 = `if response.status_code == 200:
    print("Successfully sent data to IFTTT.")
else:
    print(f"Failed to send data to IFTTT. Status code: {response.status_code}")`;    

    const codeString12 = `import dht
import bmp085
import mq135
import machine
import time
from API import sendData`;

    const codeString13 = `class DHT11:
    def __init__(self, pin_number):
        self.pin = machine.Pin(pin_number)
        self.sensor = dht.DHT11(self.pin)

    def getTemperature(self):
        self.sensor.measure()
        return self.sensor.temperature()

    def getHumidity(self):
        self.sensor.measure()
        return self.sensor.humidity()

    def getTemperatureHumidity(self):
        return self.getTemperature(), self.getHumidity()`;              

    const codeString14 = `class BMP180:
    def __init__(self, scl_number, sda_number):
        self.i2c = machine.SoftI2C(scl=machine.Pin(scl_number), sda=machine.Pin(sda_number))
        self.bmp = bmp085.BMP180(self.i2c)

    def getPressure(self):
        self.bmp.oversample = 2
        self.bmp.sealevel = 101325
        self.bmp.blocking_read()
        return self.bmp.pressure`;

    const codeString15 = `class MQ135:
    def __init__(self, pin_adc_number):
        self.mq135 = mq135.MQ135(machine.Pin(pin_adc_number))

    def getPPM(self):
        return self.mq135.get_ppm()`;

    const codeString16 = `class SensorManager(DHT11, BMP180, MQ135):
    def __init__(self, dht_pin, bmp_scl, bmp_sda, mq135_pin_adc):
        DHT11.__init__(self, dht_pin)
        BMP180.__init__(self, bmp_scl, bmp_sda)
        MQ135.__init__(self, mq135_pin_adc)
        self.history = {"'temperature': [], 'humidity': [], 'pressure': [], 'co2_ppm': [], 'time': []"}
        self.interval = 600`;
                         
    const codeString17 = `from sensors import SensorManager
sensors = SensorManager(dht_pin=16, bmp_scl=22, bmp_sda=21, mq135_pin_adc=36)
sensors.getDataPeriodically()`;

    const codeString18 = `self.SSID = SSID
self.KEY = KEY`;

    const codeString19 = `self.connectToWifi()
self.setTime()
self.setResetPin()`;

    return (
        <body>
            <NavBar/>
            <div id="body">
                <h1 id="main-heading">How to automate the measurement and collecting data process</h1>
                <p className="text">
                    So far when we wanted to measure temperature, humidity, air pressure, or C02 concentration in the air, we had to connect to the microcontroller and run some commands in the terminal. We couldn’t save the data obtained from the sensors, could only see them in the terminal. As soon as we disconnected from the microcontroller, and connected again, we had to repeat everything. 
                </p>
    
                <p className="text">
                    I will show you how I automate this whole process, by writing a few scripts and uploading them to the microcontroller.
                </p>
    
                <h2>
                Detailed code explanation
                </h2>
    
                <section className="text">
                    <p>
                    The first script I wrote is <b><i>microcontroller.py</i></b>, where I define the class with the methods on how to connect to Wi-Fi, set the time using NTP (Network Time Protocol), and set a reset pin.
                    </p>
                    <p>
                        Begin with importing <a href="https://docs.python.org/3/library/time.html">the time module</a>, a module that provides various time-related functions. We will use it together with <a href="https://mpython.readthedocs.io/en/v2.2.1/library/micropython/ntptime.html">the ntptime</a>, module used for time synchronization, providing accurate time, International Standard Time (UTC).
                        <br/>Continue with importing <a href="https://docs.micropython.org/en/latest/esp8266/tutorial/network_basics.html">the network module</a>, which will assist us in configuring the WiFi connection. From <a href="https://docs.micropython.org/en/latest/library/machine.html">the machine module</a>, we need only Pin class to set a reset pin, so the OLED display can work.
                    </p>
                </section>
                
               <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString}
               </SyntaxHighlighter>
                
                <p className="text">
                    Next thing is to define the <i>‘Microcontroller’</i> class. Classes are blueprints for creating objects with certain properties and behaviors in Python.
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString2}
                </SyntaxHighlighter>
                
                <p className="text">
                    This method is a special method called the constructor. It's automatically called when you create a new instance of the <i>‘Microcontroller’</i> class. <br/>It takes two parameters: SSID (the name of the WiFi network) and KEY (the WiFi password).
                </p>
    
                <SyntaxHighlighter language="python" showLineNumbers>def __init__(self, SSID, KEY):</SyntaxHighlighter>
    
                <p className="text">
                    These lines store the values of SSID and KEY passed to the constructor as attributes of the Microcontroller object.
                </p>
    
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString18}              
                </SyntaxHighlighter>
                
    
                <p className="text">
                    This line sets up a way for our microcontroller to connect to the internet through a WiFi network.
                </p>
    
                <SyntaxHighlighter language="python" showLineNumbers>self.sta_if = network.WLAN(network.STA_IF)</SyntaxHighlighter>
    
                <p className="text">At the end we are calling three methods:</p>
    
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString19}
                </SyntaxHighlighter>
                
                <p className="text">
                    The <b>connectToWifi()</b> method serves to connect the microcontroller to the WiFi network.
                    <br/>The <b>setTime()</b> method sets the current time on the microcontroller using Network Time Protocol (NTP), and
                    <br/>the <b>setResetPin()</b> method sets a pin (Pin 4) to a high voltage level, which is necessary for an OLED display to work properly.
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString3}
                </SyntaxHighlighter>
                
                <p className="text">
                    The <b>connectedToWifi()</b> cheks if the microcontroller is connected to the WiFi. I will use this function inside the <b>connectToWifi()</b> method:
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString4}
                </SyntaxHighlighter>

                <p className="text">
                    Here is the code for the <b>setTime()</b>:
                </p>

                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString5}
                </SyntaxHighlighter>
                
                <p className="text">
                    and the <b>setResetPin()</b>:
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString6}
                </SyntaxHighlighter>
                
                <p className="text">
                    The next script is <b><i>boot.py</i></b>, a script that will run first when the microcontroller starts up. Before the main code starts to run, we need to configure our microcontroller, and that’s the role of the boot.py script. This can be a lot of things, but in our case, it means that before anything else, we want our microcontroller to connect to the WiFi, and then set the current time and reset the pin to HIGH so the OLED can work. 
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString7}
                </SyntaxHighlighter>
                
                <p className="text">
                    So import the <i>‘Microcontroller’</i> class from the microcontroller.py, then define your WiFi network name and the password, and create an instance of the <i>‘Microcontroller’</i> class with the SSID and password of your WiFi network.
                    <br/>Finally, when the <b><i>boot.py</i></b> and other scripts are uploaded to the microcontroller, the microcontroller connects to the WiFi, sets the current time, and resets the pin.
                </p>
                
                <h2>Sending data to the Google Sheets</h2>
                
                <p className="text">
                    There are many tools that can be used to save the data obtained from the sensors. I decided to use Google Sheets, as a place where I would save and collect the data obtained from the weather station.
                    <br/><a href="https://ifttt.com/explore">IFTTT</a> is another tool that helped me to connect my microcontroller with the Google Sheets, which enabled me to send the data from the microcontroller to the Google Sheets. 
                </p>
                
                <TipCallout tipText={'This is the reason why you want to connect your microcontroller to the WiFI, as IFTTT can be used only if your microcontroller has the internet connection.'}/>
                
                <section className="text">
                    <p>
                        Before writing the code, we have to set up the Google Sheets and IFTTT. Log in to your Google account and navigate to Google Sheets. Create the new spreadsheet where you want to store your data (I named my spreadsheet “esp32”). 
                    </p>
                    <p>
                        To set up the IFTTT, first create an IFTTT account and open the app in the web. Now do the following:
                    </p>
                    <ul id="list">
                        <li>
                            Create a new applet. An applet in IFTTT is a small application that connects two or more services, in our case the microcontroller and Google Sheets, to enable specific functionality.
                            <ul id="list">
                                <li>On the homepage of the app, select "Create" in the top right corner.</li>
                                <li>Click the “Add” button inside the “If this” bubble to choose a trigger for your applet.</li>
                                <li>Search and select the trigger service, in our case “Webhooks”.</li>
                                <li>Choose “Receive a web request with a JSON payload” as the specific trigger event.</li>
                                <li>Name your event as you want it, my event is “esp32_measurement”. Then click on the “Create trigger”.</li>
                            </ul>
                        </li>
                        <li>
                            Set up Google Sheets as the action.
                            <ul id="list">
                                <li>Click the “Add” button inside the “Then That” bubble.</li>
                                <li>Search and select "Google Sheets."</li>
                                <li>Choose "Add row to spreadsheet" as the specific action.</li>
                                <li>When you chose "Add row to spreadsheet", the new page would open. In “Google Sheets account”, type your Google Sheets account and authorize IFTTT to access it. Then click “Create action” button.</li>
                                <li>Then go to the <a href="https://ifttt.com/maker_webhooks">Webhooks page</a>, and click on the “Documentation” button. A new page appears, with the webhook key at the top of the page. Note down your unique key, as you would need it later when writing the code for the post request.</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <p>
                        When the Google Sheets and IFTTT are set up, it’s time to write an <b><i>API.py</i></b> script, a script that contains a code for sending data from the microcontroller to the Google Sheets.
                    </p>
                    
                    <p>
                        The first thing to do is to import two modules: <a href="https://makeblock-micropython-api.readthedocs.io/en/latest/public_library/Third-party-libraries/urequests.html">urequests</a> and <a href="https://docs.micropython.org/en/v1.15/library/ujson.html">ujson</a> as json. 
                    </p>
                    <p>
                        Urequests module helps us to write HTTTP requests in Python, and ujson module alows us to convert between Python objects and the JSON data format.
                    </p>
                </section>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString8}
                </SyntaxHighlighter>
                
                <section className="text">
                    <p>The only thing to remain is to define the function <b><i>‘sendData’</i></b>, which will be responsible for sending the data to the Google Sheets. </p>
                    <p>
                        First I define the function <b><i>‘sendData’</i></b> that takes one parameter, <b>‘payload’</b>, which is the data to be sent to IFTTT.
                    </p>
                    <SyntaxHighlighter language="python" showLineNumbers>def sendData(payload):</SyntaxHighlighter>
                    <p>
                        Then create a dictionary named <b>‘headers’</b> that specifies the content type of the data being sent as JSON.
                    </p>
                    <SyntaxHighlighter language="python" showLineNumbers>headers = ("Content-Type": "application/json")</SyntaxHighlighter>
                    <p>This snippet of code checks if the <b>‘payload’</b> is empty or None. If it is, the function prints a message indicating that the payload is empty and returns, indicating that no data should be sent.</p>
                </section>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString9}    
                </SyntaxHighlighter>    
                
                <section className="text">
                    <p>
                        The post request that we have defined contains:
                    </p>
                    <ul id="list">
                        <li>url of the IFTTT Webhooks, with the specified event name (esp32_measurement) and Webhooks key. Instead of the ‘esp32_measurement’, you should type your event name. </li>
                        <li>the ‘data’ parameter contains the payload converted to a JSON string using <b>json.dumps()</b> method.</li>
                        <li>headers, which I already explained.</li>
                    </ul>
                </section>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString10}
                </SyntaxHighlighter>
                
                <p className="text">
                    This checks the HTTP response status code returned by IFTTT. If the status code is 200 (indicating success), it prints a success message. Otherwise, it prints a failure message along with the status code.
                </p>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString11}
                </SyntaxHighlighter>

                <p className="text">At the end of of the script, we will close the HTTP response object to free up resources.</p>
    
                <SyntaxHighlighter language="python" showLineNumbers>response.close()</SyntaxHighlighter>

                <h2>Collecting data from the sensors</h2>
    
                <p className="text">
                    Before we send the data from the microcontroller, we have to tell the sensors how and when to take the measurements, and where to save the data on the microcontroller, before being sent to the Google Sheets.

                    <br/>All of this will be defined in the <b><i>sensors.py</i></b> script, so take a look at the snippets of code and its explanation. 
                </p>

                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString12}
                </SyntaxHighlighter>

                <p className="text">
                    <br/>As always, we will start with importing things. As you already know, in order to write the code for the sensors, we have to use the sensor’s libraries, in our case dht, bmp085, and mq135.
                    
                    <br/>The machine module contains functions that allow us to access the microcontroller’s hardware. I already explained the time module, from which we will use two functions.
                    
                    <br/>As you may recall, ‘sendData’ is a function responsible for sending the data from the microcontroller to the Google Sheets, via IFTTT.

                    <br/>Now we will define the three classes, each representing one sensor. The first one is the class <i>“DHT11”</i>. 
                </p>
    
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString13}
                </SyntaxHighlighter>
    
                <section className="text">
                    <p>
                        The instance of the DHT11 class will be initialized with the pin_number, which represents the microcontroller’s GPI pin that the sensor’s DATA pin is connected to, as an argument. 
                    </p>
                    <p>
                        This class contains three methods:
                    </p>
                    <ul id="list">
                        <li>
                            <b>‘getTemperature’</b>:
                            <ul id="list">
                                <li>It first calls the <b>measure()</b> method of the sensor to perform a measurement.</li>
                                <li>It then retrieves the temperature reading using the <b>temperature()</b> method of the sensor and returns the result.</li>
                            </ul>
                        </li>
                        <li>
                            <b>‘getHumidity’</b>:
                            <ul id="list">
                                <li>Similar to <b>getTemperature()</b>, but it retrieves the humidity reading using the <b>humidity()</b> method of the sensor.</li>
                            </ul>
                        </li>
                        <li>
                            <b>‘getTemperatureHumidity’</b>:
                            <ul id="list">
                                <li>It's a convenience method that calls <b>getTemperature()</b> and <b>getHumidity()</b> to retrieve both temperature and humidity readings at once, returning them as a tuple.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
    
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString14}
                </SyntaxHighlighter>
    
                <section className="text">
                    <p>To initialize the <i>“BMP180”</i> class, we need two arguments: scl and sda pins of the microcontroller.</p>
                    <p>This class contains only one method called <b>‘getPressure’</b>. It is used to retrieve the atmospheric pressure reading from the BMP180 sensor. It sets the oversampling and sea level pressure values for the sensor to enhance accuracy, then performs a blocking read from the sensor to measure the pressure. Finally, it returns the measured pressure value.</p>
                    <p>The last class represents the MQ135 sensor, used to measure the concentration of CO2, expressed in PPM.</p>
                </section>
                
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString15}
                </SyntaxHighlighter>
     
                <section className="text">
                    <p>
                        To initialize this class, you would need to provide the microcontroller’s ADC pin, to which is the sensor’s AO pin connected. 
                    </p>
                    <p>
                        The <b>getPPM()</b> method of the <i>‘MQ135’</i> class is used to retrieve the PPM (parts per million) value of CO2 from the MQ135 sensor.
                    </p>
                    <p>
                        We’re done with the classes representing each of our sensors. Now it’s time to write a class, which will link all of the functionalities we have written so far:
                    </p>
                    <ul id="list">
                        <li>Do the measurements.</li>
                        <li>Save the data obtained from the measurements.</li>
                        <li>Send those data to the Google Sheets file.</li>
                    </ul>
                </section>
     
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString16}
                </SyntaxHighlighter>
     
                <section className="text">
                    <p>
                        The <i>‘SensorManager’</i> class inherits from the <i>‘DHT11’</i>, <i>‘BMP180’</i>, and <i>‘MQ135’</i> classes. This means that <i>‘SensorManager’</i> will have access to all the attributes and methods of these classes.
                    </p>
                    <p>
                        The <b>__init__</b> method takes four parameters: <b>dht_pin</b>, <b>bmp_scl</b>, <b>bmp_sda</b>, and <b>mq135_pin_adc</b>, which represent the GPIO pin numbers connected to the respective sensors. First thing is to call the constructors of the parent classes (’DHT11’, ‘BMP180’, and ‘MQ135’) using <b>DHT11.__init__</b>(), <b>BMP180.__init__()</b>, and <b>MQ135.__init__()</b>, passing the pin numbers as arguments to initialize instances of these sensor classes.
                    </p>
                    <p>
                        The <b>self.history</b> dictionary will be used to save the data obtained from the sensors. Remember that in the <b>sendData()</b> method, which takes this object as an argument, he will be converted to the JSON. 
                    </p>
                    <p>
                        Finally, It sets the <b>self.interval</b> attribute to 600 seconds, representing the time interval between sensor measurements.
                    </p>
                    <p>
                        This class contains two methods: <b>measure()</b> and <b>getDataPeriodically()</b>.
                    </p>
                    <p>
                        The <b>measure()</b> attempts to read temperature and humidity from the DHT11 sensor, pressure from the BMP180 sensor, and CO2 ppm from the MQ135 sensor. It stores the sensor readings along with the current date and time in the <b>self.history </b> dictionary. If an exception occurs during sensor reading, it prints an error message.
                    </p>
                    <p>
                        The <b>getDataPeriodically()</b> method is used to continuously measure sensor data at regular intervals and send it to the Google Sheets, as we already explained.
                        <br/>Here is the breakdown of this method:
                    </p>
                    <ul id="list">
                        <li>It enters an infinite loop to repeatedly measure sensor data.</li>
                        <li>Calls the <b>measure()</b> method to obtain sensor readings and store them in <b>self.history</b>.</li>
                        <li>Prints the current time when the data is measured.</li>
                        <li>Sends the collected sensor data using the <b>sendData()</b> function.</li>
                        <li>Clears the <b>self.history</b> dictionary to prepare for the next round of measurements.</li>
                        <li>Sleeps for the specified <b>self.interval </b> duration before repeating the process.</li>
                        <li>If an exception occurs during data measurement or transmission, it prints an error message.</li>
                    </ul>
                    <p>
                        With the defined <i>“SensorManager” </i> class, our sensors.py script is done. The last script we need to write, before uploading them to the microcontroller, is the main.py script.
                    </p>
                    <p>
                        <b><i>Main.py</i></b> serves as the entry point for the program execution when the microcontroller starts up. This means, it will be automatically executed after the boot.py script, which is the way how to automate the weather station. 
                    </p>
                </section>
     
                <SyntaxHighlighter language="python" showLineNumbers>
                    {codeString17}
                </SyntaxHighlighter>
    
                <p className="text">
                    We start with importing the <i>‘SensorManager’</i> class from the ‘sensors’ script. Then create an instance of the ‘SensorManager’ class named ‘sensors’, passing GPIO pin numbers for the DHT11, BMP180, and MQ135 sensors as arguments to the constructor. Finally, call the <b>getDataPeriodically()</b> method of the ‘sensors’ instance to continuously measure sensor data at regular intervals and send it to the Google Sheets file.
                </p>
                
                <InfoCallout infoText={'I made a github repo, containing all of the scripts I wrote for the weather station. If you want to see it, please check this <a href="https://github.com/ivanorsolic95/MeteoLogic">link'}/>

                <h2>Upload the scripts</h2>
    
                <p className="text">
                    That’s it! All of the code is writen and ready to deploy. To make it happen, you have to upload the next scripts to the microcontroller:
                </p>
    
                <ul className="text" id="list">
                    <li>
                        the sensor’s libraries:
                        <ul id="list">
                            <li>bmp085.py and mq135.py, remember that dht11.py is already on your microcontroller. </li>
                        </ul>
                    </li>
                    <li>API.py</li>
                    <li>urequests.py</li>
                    <li>boot.py</li>
                    <li>microcontroller.py</li>
                    <li>sensors.py</li>
                    <li>main.py</li>
                </ul>
    
                <p className="text">
                    After you upload the scripts via ampy in the terminal, close the terminal. Open the MobaXTerm and connect to the microcontroller using the saved session. When you successfully connect to the microcontroller, you will see in the terminal that your microcontroller automatically connects to the WiFi network, sets the time, resets the RST pin of the microcontroller, takes the measurements using sensors, and sends the data obtained from the measurements to the Google Sheets file via IFTTT. 
                </p>
    
                <p className="text">
                    <i><b>Now your weather station works automatically and you can leave it plugged into your laptop/PC, to do its job!</b></i>
                </p>
    
                <img 
                    src={WeatherStation} 
                    alt="Weather station in work"
                    data-zoomable 
                    style={{ cursor: 'zoom-in' }}           
                />
        
            </div>  
        </body>
    );
};

export default Code;

export const Head = () => (
    <Title/>
)
