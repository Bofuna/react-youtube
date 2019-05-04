import React from "react"
import "./VideoPreview.css"
import dog from "../../assets/images/boo.jpg"

function VideoPreview() {
  return (
    <div className="videopreview">
      <img src={dog} alt="dog" className="videopreview__image" />
      <span className="videopreview__time">17:01</span>
      <div className="videopreview_description">
        <p className="videopreview__title">
          Flinch w/ Blackpink Flinch w/ Blackpink Flinch w/ B
          
        </p>
        <span className="videopreview__channel">
          Today on the Korean Server
        </span>
        <div className="videopreview__details">
          <span className="videopreview__views">296k views</span>
          <span className="videopreview__dot"> · </span>
          <span className="videopreview__date">3 days ago</span>
        </div>
      </div>
    </div>
  )
}

export default VideoPreview
