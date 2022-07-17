import React from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import MessageSender from "./MessageSender"
import PostElement from "./PostElement"
function Feed() {
    return (
        <div className="feed">

            <StoryReel />
            <MessageSender />
            <PostElement />


        </div>
    )
}

export default Feed