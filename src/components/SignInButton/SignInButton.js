import React from "react"
import "./SignInButton.css"

function SignInButton() {
  return (
    <button className="signin__button">
      <i className="fas fa-user-circle" />
      <span className="signin__button__text">Sign in</span>
    </button>
  )
}

export default SignInButton
