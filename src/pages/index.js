import * as React from "react"
import NavBar from "../components/NavBar"

const mainHeader = "Build your own station!"

const IndexPage = () => {
  return (
    <body>
      <NavBar></NavBar>
      <div id="body">
        <h1>{mainHeader}</h1>
      </div>
    </body>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
