import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"

function Story({ image, title, profilesrc }) {
    return (

        <div className="Story" style={{ backgroundImage: `url(${image})`, backgroundSize: 150, backgroundRepeat: "no-repeat" }} >
            <Avatar src={profilesrc} style={{ border: "3px solid red" }} />


            <h4>{title} </h4>

        </div>

    )
}

export default Story