import React from 'react'
import Post from './Post'
import "./Postelement.css"
function PostElement() {
    return (
        <div className="postelement">

            <Post username="uvislive" profilepic="images/uv.png" message=" Hello Guys" timestamp="5:30" imgurl="images/fb.jpg" />
            <Post username="ajay" timestamp="6:30" imgurl="" message="whatsa up ? " />
            <Post username="dhruvil" timestamp="12:20" message="Out OF your Mind" imgurl="" />
            <Post username="MIlan" />




        </div>
    )
}

export default PostElement