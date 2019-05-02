import React from "react"
import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/SideBar/SideBar"
import "./App.css"
import VideoFeed from "./components/VideoFeed/VideoFeed"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">
          <SideBar />
          <VideoFeed />
        </div>
      </React.Fragment>
    )
  }
}

export default App
