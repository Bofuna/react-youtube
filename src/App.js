import React from "react"
import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/SideBar/SideBar"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">
          <SideBar />
        </div>
      </React.Fragment>
    )
  }
}

export default App
