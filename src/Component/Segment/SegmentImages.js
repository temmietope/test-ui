import React from 'react'
import { images } from "../../constants"
import "./Segment.css"


const SegmentImages = () => {
    return (
        <div className="list">{images.map((image, index) => {
            return (
                <div className="one" key={index}>
                    <div><img src={image.imgUrl} alt="pic" /></div>
                    <div className="one-title">
                        <span>
                            <p>{image.title}</p>
                            <span className="duration">{image.duration}</span>
                        </span>
                        <span><i className="fas fa-ellipsis-v" /></span>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default SegmentImages