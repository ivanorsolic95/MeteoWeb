import React from "react";
import NavBar from "../components/NavBar";
import '../styles/hardware.css'
import TipCallout from "../components/TipCallout";
import ImageWithCaption from "../components/ImageWithCaption";
import ESP32 from '../images/esp32.png'
import InfoCallout from "../components/InfoCallout";
import DHT11 from '../images/DHT11.jpg'
import AlertCallout from "../components/AlertCallout";
import BMP180 from '../images/BMP180.jpg'
import AirPressure from '../images/AirPressure.jpg'
import WarningCallout from '../components/WarningCallout'
import MQ135 from '../images/MQ135.jpg'
import Title from "../components/Title";

const Hardware = () => {
    const tipText = "If you’re a complete beginner in the area of hardware and embedded systems, I would recommend to buy the same components as me."
    const htmlText = 'For more information about the ESP32 microcontroller, check out the <a href="https://www.espressif.com/en/products/socs/esp32">official website</a> of the company.'

    return (
        <body>
            <NavBar></NavBar>
            <div id="body">
                <h1 id="main-heading">Hardware</h1>
                <p className="text">
                    Let's start with the hardware components that we need to build the weather station. Below in the table, I gave you the names of the components, together with the links where you can buy the components.
                </p>
                <table id="components-table">
                    <thead>
                        <tr>
                            <th>Components</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>   
                            <td>Microcontroller</td>
                            <td><a href="https://www.amazon.com/LILYGO-LoRa32-433Mhz-Development-Paxcounter/dp/B0B45L398K?th=1">ESP32</a></td>
                        </tr>
                        <tr>
                            <td>Temperature and Humidity Sensor</td>
                            <td><a href="https://www.amazon.com/s?k=dht11+sensor&crid=137QATRHNAOAR&sprefix=%2Caps%2C217&ref=nb_sb_ss_recent_5_0_recent">DHT11</a></td>
                        </tr>
                        <tr>
                            <td>Air Pressure Sensor</td>
                            <td><a href="https://www.amazon.com/s?k=bmp180+pressure+sensor&crid=1J04NDMIA2UHJ&sprefix=%2Caps%2C205&ref=nb_sb_ss_recent_3_0_recent">BMP180</a></td>
                        </tr>
                        <tr>
                            <td>Air Quality Sensor</td>
                            <td><a href="https://www.amazon.com/s?k=mq135+air+quality+sensor&crid=27M77QKHLHPYY&sprefix=%2Caps%2C197&ref=nb_sb_ss_recent_3_0_recent">MQ135</a></td>
                        </tr>
                    </tbody> 
                </table>
                <p className="text">
                    There are plenty of other microcontrollers as well as sensors available, but in terms of cost and ease of use, those above are very practical. For example, I found all the components on Amazon, and together they cost around 30$.If you want to reduce costs, instead of <a href="https://www.amazon.com/LILYGO-LoRa32-433Mhz-Development-Paxcounter/dp/B0B45L398K?th=1">this microcontroller</a>, you can buy <a href="https://www.amazon.com/s?k=esp32+development+board&crid=23GXQBQYJ3JHN&sprefix=%2Caps%2C611&ref=nb_sb_ss_recent_1_0_recent">one without display</a>.
                </p>
                <TipCallout tipText={tipText}></TipCallout>
                <h2>ESP32 Microcontroller</h2>
                <ImageWithCaption
                    imageSource={'https://www.lilygo.cc/products/lora3'}
                    imageFolderSource={ESP32}
                    imageAlt={'ESP32 Microcontroller'}
                >    
                </ImageWithCaption>
                <p class="text">
                    Vehicles, medical devices, vending machines, home appliances, and weather stations all use microcontrollers.

                    They are small, low-cost computer-on-a-chip designed to control how the objects work and respond to the environment. <br/>It means that our sensors, whose task is to measure something from the environment, e.g., temperature, are meaningless without a microcontroller connected to them.

                    <br/>ESP32 is a microcontroller developed by the Chinese company Espressif Inc. It’s a very affordable solution for use in commercial products, especially considering its high level of performance and extensive features such as WiFi and Bluetooth.
                </p>
                <InfoCallout infoText={htmlText}></InfoCallout>
                <h2>Sensors</h2>
                <p class="text">
                    Sensors are like the senses for our electronic projects, allowing devices to observe and interact with the world around them. Just as humans use their senses to understand their environment (seeing, hearing, touching, etc.), sensors give machines the ability to detect and measure various physical conditions. These conditions can include temperature, humidity, pressure, light, motion, and much more.

                    <br/>In the context of our project, sensors are crucial because they collect data from the environment. This data could be anything from how hot or cold it is, to how humid the air feels, or even how high above sea level a place is. The sensors we use are small electronic components that can detect these specific conditions and convert them into data that our main controller, in this case, the ESP32, can understand and process.
                
                    <br/>Using sensors, our devices can make decisions, take actions, or simply record information based on what they 'sense.' For example, a weather station uses sensors to monitor conditions like temperature and pressure to predict the weather.
                </p>
                <h2>Temperature and humidity sensor: DHT11</h2>
                <ImageWithCaption
                    imageSource={'https://sg.cytron.io/p-dht11-sensor-module-breakout'}
                    imageFolderSource={DHT11}
                    imageAlt={'Temperature and humidity sensors'}
                >    
                </ImageWithCaption>
                <p class="text">
                    When someone asks you what’s the weather and you reply: “It’s so hot and humid”;  it means that the temperature and the humidity are high.
                </p>
                <AlertCallout
                    alertText={'This can vary depending on the geographical location and personal perception, but generally, temperatures above 30°C (86°F) are considered hot.'}>
                </AlertCallout>
                <AlertCallout
                    alertText={'Humidity levels of 60% or higher are typically considered humid. However, the discomfort level increases significantly as humidity levels reach 70% or higher, especially in combination with high temperatures.'}>
                </AlertCallout>
                <section class="text">
                    <p>There are numerous reasons why it is important for a weather station to have sensor to measure temperature and humidity:</p>
                    <ul id="list">
                        <li>Energy Efficiency: Knowing the temperature and humidity can help in managing home heating and cooling systems more efficiently, leading to energy savings.</li>
                        <li>Scientific Research: Accurate records of temperature and humidity are necessary for climate studies and research into global weather patterns.</li>
                        <li>Comfort and Health: High humidity can make it feel hotter than it is, while low humidity can cause dry skin and respiratory irritation.</li>
                    </ul>
                    <p>The DHT11 is an ultra-low-cost digital temperature and humidity sensor made of two parts, a <a href="https://www.processsensing.com/en-us/blog/capacitive-sensor-technology.htm">capacitive humidity sensor</a> and <a href="https://www.omega.com/en-us/resources/thermistor">a thermistor</a>. It also includes a built-in chip that takes the physical measurements of temperature and humidity and translates them into a digital format that a microcontroller can understand. This process, known as analog-to-digital conversion, allows the sensor to communicate precise data in a form that's easy to work with using simple programming. </p>
                </section>
                <h2>Air pressure sensor: BMP180</h2>
                <ImageWithCaption
                    imageSource={'https://components101.com/sensors/bmp180-atmospheric-pressure-sensor'}
                    imageFolderSource={BMP180}
                    imageAlt={'Air pressure sensor'}
                >    
                </ImageWithCaption>
                <p class="text">
                    Another key feature of the weather station is measuring air pressure. Air pressure, also known as atmospheric pressure, is the force exerted by air on any surface in contact with it, whether compressed or unconfined. Air pressure is expressed in several different systems of units, including millibars, pounds per square inch, millimeters (or inches) of mercury, standard atmospheres, or kilopascals.
                </p>
                <ImageWithCaption
                    imageSource={'https://www.wikihow.com/Read-a-Weather-Map'}
                    imageFolderSource={AirPressure}
                    imageAlt={'Air pressure explanation'}
                >    
                </ImageWithCaption>
                <InfoCallout
                    infoText={'Increasing high pressure (above 1000 millibars) corresponds with clear, sunny weather. Decreasing pressure (below 1000 millibars) corresponds with cloudy, rainy weather.'}>
                </InfoCallout>
                <p class="text">
                    The BMP180 sensor from Bosch is the best low-cost solution for measuring air pressure. You can also use it to measure temperature and altitude! It's precise and uses very little power, making it suitable for portable weather stations.
                </p>
                <WarningCallout
                    warningText={'The BMP180 is sensitive to moisture, as moisture can damage the sensor and affect its accuracy. Do not submerge or spray the sensor with water or solvents.'}>
                </WarningCallout>
                <h2>Air quality sensor: MQ135</h2>
                <ImageWithCaption
                    imageSource={'https://ardubotics.eu/hr/senzori/1103-gas-sensor-mq135.html'}
                    imageFolderSource={MQ135}
                    imageAlt={'Air quality sensor'}
                >    
                </ImageWithCaption>
                <p class="text">
                    Air quality sensors are not standard components of every weather station, yet they extend the functionality of the weather station beyond just weather prediction. It allows us to assess the health and safety of their environment, providing valuable insights into pollution levels. This is particularly relevant in urban areas or places with higher industrial activity, where air quality can significantly impact health and well-being.
                </p>
                <AlertCallout
                    alertText={'According to the <a href="https://www.who.int/health-topics/air-pollution#tab=tab_2">World Health Organization</a>, air pollution is associated with 7 million premature deaths annually.'}>
                </AlertCallout>
                <p class="text">
                    The MQ135 sensor is commonly used for detecting a wide range of air pollutants, including ammonia, nitrogen oxides, benzene, smoke, and carbon dioxide, making it essential for monitoring air quality in environments ranging from homes to industrial sites. One of its key advantages is its sensitivity to a broad spectrum of harmful gases, combined with its affordability, fast response, and ease of use.
                </p>
            </div>
        </body>
    )
}

export default Hardware;

export const Head = () => (
    <Title/>
)
