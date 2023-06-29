import React from 'react'
import { io } from 'socket.io-client';
import { useState , useEffect} from "react";
export const socket = io("http://localhost:3003");

function Message({ userName }) {

  const [value, setValue] = useState('')
  const [messages,setMessage]=useState([])
console.log(userName);
    const handleSubmit = (e) => {
      const sendObj={
        from: userName,
        message:value
      }
      socket.emit("sendMessage",sendObj)
        e.preventDefault();
        setValue('')
      }
      
      useEffect(() => {
        socket.on("chatMessage",(data)=>{
          setMessage((oldData)=>[...oldData,data])
        })
        return () => {
          socket.off("chatMessage")
        };
      }, []);
  return (
    <div>
        <form onSubmit={handleSubmit}>
<input type='text' value={value} onChange={(ev)=>{setValue(ev.target.value)}}/>
<button>Send</button>
        </form>
        <ul style={{overflow: "scroll", background: "lightblue", listStyleType: "none"}}>
           {messages.map((item) => 
              <li
                key={item.userName}
              >{item.from}: {item.message}</li>
         )
        }
        </ul>
    </div>
  )
}

export default Message