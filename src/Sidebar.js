import React from 'react'
import SidebarRow from './SidebarRow'

import "./Sidebar.css"

import { Avatar } from '@material-ui/core'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from "@material-ui/icons/Chat"
import PeopleIcon from "@material-ui/icons/People"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AccountboxIcon from "@material-ui/icons/AccountBox"
function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow title="uvislive" Icon={AccountboxIcon} />
            <SidebarRow title="COVID-90 information center" Icon={LocalHospitalIcon} />
            <SidebarRow title="Freinds" Icon={PeopleIcon} />
            <SidebarRow title="Messanger" Icon={EmojiFlagsIcon} />
            <SidebarRow title="MarketPlace" Icon={StorefrontIcon} />
            <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
            <SidebarRow title="expand more" Icon={ExpandMoreIcon} />



        </div>

    )
}

export default Sidebar