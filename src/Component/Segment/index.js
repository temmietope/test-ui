import React from "react";
import "./Segment.css"
import SegmentImages from "./SegmentImages";

const Segment = ({ name }) => {
    return (
        <div className="segment">
            <section className="header">
                <div className="avatar"><img src="./images/beach.jpg" alt="avatar" /> <span className="icon"><i className="fas fa-random" /><i className="fas fa-ellipsis-v" /></span></div>
                <div className="name"><h3>{name}</h3></div>
                <p>Discover more about your mind and start to deepen your practice</p>
                <span className="begin"><i className="fas fa-play" /> Begin now </span>
            </section>
            <section className="images">
                <span className="materials"><h3>Materials</h3> <span>See all <i className="fas fa-greater-than" /></span></span>
                <SegmentImages />
            </section>
        </div>
    )
}

export default Segment