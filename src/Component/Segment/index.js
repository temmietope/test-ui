import React from "react";
import { images } from "../../constants"
import "./Segment.css"

const Segment = ({ name }) => {
    return (
        <div className="segment">
            <section className="header">
                <img src="./images/beach.jpg" alt="avatar"/>
                <div className="name"><h3>{name}</h3> <span className="icon"><i className="fas fa-random"/><i className="fas fa-ellipsis-v"/></span></div>
                <p>Discover more about your mind and start to deepen your practice</p>
                <span>Begin now</span>
            </section>
            <section className="images">
                <h3>Materials</h3>
                <div className="list">{images.map((image) => {
                    return (
                    <div className="one">
                        <div><img src={image.imgUrl} alt="pic" /></div>
                        <p>{image.title}</p>
                        <span>{image.duration}</span>
                    </div>
                    )
                })}</div>
            </section>
        </div>
    )
}

export default Segment