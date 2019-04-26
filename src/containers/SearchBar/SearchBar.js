import React from "react"
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        name="search"
        className="searchbar__input"
        placeholder="Search"
      />
      <button className="searchbar_button">
        <i className="fas fa-search" />
      </button>
    </div>
  )
}

export default SearchBar
