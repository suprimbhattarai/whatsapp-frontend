import React from 'react'
import '../components/SidebarChat.css'
import { Avatar, IconButton } from "@mui/material";


const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>This is a last message</p>
        </div>      
    </div>
  )
}

export default SidebarChat
