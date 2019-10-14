import React from "react"
import SideBar from "../SideBar"
import Main from "../Main";
import "./Home.css"

const Home = ()=>{
    return(
        <div className="home">
            <SideBar />
            <Main />
        </div>
    )
}

export default Home