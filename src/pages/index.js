import * as React from "react"
import NavBar from "../components/NavBar"
import InfoCallout from "../components/InfoCallout"

const mainHeader = "Build your own weather station!"
const infoText = "Don't worry, I will explain what the microcontroller is, why you need it, what type of sensors you need, and where to buy them."

const IndexPage = () => {
  return (
    <body>
      <NavBar></NavBar>
      <div id="body">
        <h1 id="main-heading">{mainHeader}</h1>
        <InfoCallout infoText={infoText}></InfoCallout>
      </div>
    </body>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
