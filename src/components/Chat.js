import React, { useState } from 'react'
import '../components/Chat.css'
import { Avatar, IconButton } from "@mui/material";
import {MoreVert,AttachFileRounded,SearchOutlined,InsertEmoticon, MicOutlined, SendOutlined} from '@mui/icons-material'
import axios from '../axios';

const Chat = ({messages}) => {
  const [input,setInput] = useState("");

  const sendMessage = async(e) => {
    e.preventDefault();
    await axios.post('/messages/now',{
      message: input,
      name: "DEMO APP",
      timestamp: "JUST NOW",
      recieved: false
    });
    setInput("");
  }
  return (
    <div className='chat'>

      <div className="chat_header">
        <Avatar/>
        <div className="header_info">
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
        <IconButton>
          <SearchOutlined/>
        </IconButton>
        <IconButton>
          <AttachFileRounded/>
        </IconButton>
        <IconButton>
          <MoreVert/>
        </IconButton>
      </div>

      <div className="chat_body">
        {messages.map((message) => {
          <p className={`chat_messages ${message.recieved && "chat_reply"}`}>
        <span className='chat_name'>{message.name}</span>
          {message.message}
        <span className='chat_timestamp'>{message.timestamp}</span>
        </p>
        })}
      </div>

      <div className="chat_footer">
        <InsertEmoticon className='ficon'/>
        <form>
          <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='Type a message'/>
          <button onClick={sendMessage} type="submit"><SendOutlined/></button>
        </form>
        <MicOutlined className='ficon'/>
      </div>
    </div>
  )
}

export default Chat;