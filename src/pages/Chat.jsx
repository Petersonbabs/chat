import { useEffect } from "react"
import {io} from "socket.io-client"

const socket = io("http://localhost:4005")

const Chat = () => {
    useEffect(()=>{
        console.log(socket)
    },[socket])
  return (
    <div>Chat</div>
  )
}

export default Chat