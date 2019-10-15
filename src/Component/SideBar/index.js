import React from "react"
import "./SideBar.css"

const SideBar = () => {
    return (
        <aside>
            <ul>
                <li className="ellipsis"><i className="fas fa-ellipsis-h" /></li>
                <li><i className="fas fa-drum-steelpan" /><span>Overview</span></li>
                <li><i className="fas fa-volume-up" /><span>Packs</span></li>
                <li><i className="fas fa-music" /><span>Singles</span></li>
                <li><i className="fas fa-headphones-alt" /><span>Masters</span></li>
                <li><i className="fas fa-cog" /><span>Settings</span></li>
            </ul>
        </aside>
    )
}

export default SideBar