import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <form className="d-flex" role="search">
                <input className="search form-control me-2" type="search" placeholder="Sending goodluck plants or more" aria-label="Search" style={{ width: "400px", borderRadius:"10px" }}/>
            </form>
  )
}
