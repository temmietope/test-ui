import React from "react"
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav>
            <span className="header">Make Mountains Move</span>
            <span className="others">
                <span className="find"><input type="text" placeholder="Find Something"/><button><i className="fas fa-search" /></button></span>
                <span className="image" >Hi, Christiana <img src="./images/daylight.jpg" alt="pic"/></span>
            </span>
        </nav>
    )
}

export default Navigation