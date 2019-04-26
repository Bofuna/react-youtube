import React, { Component } from "react"
import "./Navbar.css"
import logo from "../../assets/images/youtube_logo.png"
import SearchBar from "../SearchBar/SearchBar"
import SignInButton from "../SignInButton/SignInButton"

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} className="logo" />
        </div>
        <div className="navbar__main">
          <SearchBar />
        </div>
        <div className="navbar__right">
          <div className="navbar__main--right">
            <i className="fas fa-video" />
            <i className="fas fa-th" />
            <i className="fas fa-comment" />
            <SignInButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
