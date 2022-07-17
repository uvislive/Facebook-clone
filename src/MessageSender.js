import { Avatar } from "@material-ui/core";
import React from "react";
import {
    VideocamRounded,
    PhotoLibrary,
    InsertEmoticon,
} from "@material-ui/icons";
import "./MessageSender.css";
import { useState } from "react";

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageurl, setImageUrl] = useState("")
    const hiddensubmit = (e) => {
        e.preventDefault();
    };


    const changeFunction = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="shadowcomponent">
            <div className="messageSender">
                <div className="messageSender_top">
                    <Avatar src="images/uv.png" />
                    <form>
                        <input
                            type="text"
                            value={input} onChange={changeFunction}
                            className="messageSender_input"
                            placeholder="Whats on your Mind ?"
                        />
                        <input id="uri" value={imageurl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL [optional ]" />
                        <button id="hd" onClick={hiddensubmit}>
                            {" "}
                            Hidden Submit
                        </button>
                    </form>
                </div>

                <div className="messageSender_bottom">
                    <div className="messageSender_options">
                        <VideocamRounded style={{ color: "red" }} />
                        <h3>Upload Video</h3>
                    </div>
                    <div className="messageSender_options">
                        <PhotoLibrary style={{ color: "green" }} />
                        <h3>Photo Library</h3>
                    </div>
                    <div className="messageSender_options">
                        <InsertEmoticon style={{ color: "blue" }} />
                        <h3>Feeling/ Activity</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
