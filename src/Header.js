import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import { Avatar, IconButton } from "@material-ui/core";
import { ExpandMore, YouTube } from "@material-ui/icons";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="images/facebook.png" alt="facebook " />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="search Facebook" />
                </div>
            </div>
            <div className="header_middle">
                <div className="header_options">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header_options">
                    <FlagIcon fontsize="large" />
                </div>
                <div className="header_options">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header_options">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header_options">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">

                    <Avatar src="images/uv.png" />
                    <h4>uvislive</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <YouTube />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>

            </div>
            <hr />
        </div>
    );
}

export default Header;
