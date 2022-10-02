import './App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher from "pusher-js";
import axios from './axios'

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
      setMessages(response.data);
    })
  },[])

  useEffect(()=>{
    const  pusher = new Pusher('1a62b618241bef41fb79', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
