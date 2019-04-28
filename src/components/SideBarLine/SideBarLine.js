import React from "react"
import "./SideBarLine.css"

function SideBarLine(props) {
  return (
    <div className="sidebarline">
      <div className="sidebarline__icon">{props.children}</div>
      <span className="sidebarline__name">{props.name}</span>
    </div>
  )
}

export default SideBarLine
