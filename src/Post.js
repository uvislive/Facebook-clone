
/* first component edited by me 

import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"


import 

function Post() {
    return (
        <div className="post">

            <div className="name">

                <Avatar />
                <h4> Uvilive</h4>
            </div>
            <div className="postImage">
                <img src="images/fb.jpg" alt="myimage" />
            </div>
<div className="post_options">
    
</div>
        </div>

    )
}

export default Post

first finished by me */



import React from 'react'
import "./Post.css"
import Avatar from '@material-ui/core/Avatar'
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { AccountCircle, ChatBubble, ExpandMore } from "@material-ui/icons/"
import { NearMeSharp } from '@material-ui/icons/'

function Post({ profilepic, message, username, timestamp, imgurl }) {
    return (
        <div className="post">

            <div className="post_top">

                <Avatar src={profilepic} className="post_avatar" />
                <div className="post_topinfo">
                    <h4>{username}</h4>
                    <p>{timestamp} </p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={imgurl} alt="imageurl" />
            </div>
            <div className="post_options">

                <div className="postoption">
                    <ThumbUpIcon />
                    <h4>Like</h4>
                </div>
                <div className="postoption">
                    <ChatBubble />
                    <h4>Comment</h4>
                </div>
                <div className="postoption">
                    <NearMeSharp />
                    <h4>Share</h4>
                </div>
                <div className="postoption">
                    <AccountCircle />
                    <ExpandMore />
                    <h4>Share</h4>
                </div>

            </div>

        </div>

    )
}

export default Post