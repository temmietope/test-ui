import React from "react"
import Header from "../Header";
import Segment from "../Segment";
import Navigation from "../Navigation"
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <Navigation />
            <Header />
            <Segment name="Meditations" />
            <Segment name="PepTalks" />
        </div>
    )
}

export default Main