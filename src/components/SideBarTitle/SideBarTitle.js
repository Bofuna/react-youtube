import React from "react"
import "./SideBarTitle.css"

function SideBarTitle(props) {
  return (
    <div className="sidebartitle">
      <span>{props.title}</span>
    </div>
  )
}

export default SideBarTitle
