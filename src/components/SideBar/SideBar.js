import React from "react"
import "./SideBar.css"
import SideBarLine from "../SideBarLine/SideBarLine"
import SideBarTitle from "../SideBarTitle/SideBarTitle"

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarLine name="Home">
        <i className="fas fa-home" />
      </SideBarLine>
      <SideBarLine name="Trending">
        <i className="fas fa-fire" />
      </SideBarLine>
      <SideBarLine name="Subscriptions">
        <i className="fab fa-youtube" />
      </SideBarLine>
      <hr />
      <SideBarLine name="Library">
        <i className="fas fa-folder" />
      </SideBarLine>
      <SideBarLine name="History">
        <i className="fas fa-history" />
      </SideBarLine>
      <SideBarLine name="Watch Later">
        <i className="fas fa-clock" />
      </SideBarLine>
      <SideBarLine name="Liked videos">
        <i className="fas fa-thumbs-up" />
      </SideBarLine>
      <hr />
      <SideBarTitle title="Subscriptions" />
      <SideBarLine name="Browse channels">
        <i className="fas fa-plus-circle" />
      </SideBarLine>
      <hr />
      <SideBarTitle title="More from youtube" />
      <SideBarLine name="Youtube Premium">
        <i className="fab fa-youtube" />
      </SideBarLine>
      <SideBarLine name="Movies & Shows">
        <i className="fas fa-film" />
      </SideBarLine>
      <SideBarLine name="Gaming">
        <i className="fas fa-gamepad" />
      </SideBarLine>
      <SideBarLine name="Live">
        <i className="fas fa-satellite-dish" />
      </SideBarLine>
      <hr />
      <SideBarLine name="Settings">
        <i className="fas fa-cog" />
      </SideBarLine>
      <SideBarLine name="Report history">
        <i className="fas fa-flag" />
      </SideBarLine>
      <SideBarLine name="Help">
        <i className="fas fa-question-circle" />
      </SideBarLine>
      <SideBarLine name="Send feedback">
        <i className="fas fa-comment-alt" />
      </SideBarLine>
    </div>
  )
}

export default SideBar
