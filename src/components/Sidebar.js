import React from "react";
import "../components/Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
      <Avatar src=""/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon className="icon"/>
          </IconButton>
          <IconButton>
            <ChatIcon className="icon"/>
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon"/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon className="sbar"/>
          <input type="text" className="sbar" placeholder="Search or start new chat"/>
        </div>
      </div>
      <div className="sidebar_chat">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
};

export default sidebar;
