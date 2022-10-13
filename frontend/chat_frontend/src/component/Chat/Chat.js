import React, {useState, useEffect} from "react";
import {over} from 'stompjs';
import SockJS from "sockjs-client";
import "./Chat.css";

var stompClient = null;
const Chat = ({id, userName}) => {

    const [message, setMessage] = useState("");
    const [totalChat, setTotalChat] = useState([]);

    useEffect(() =>{
        connect();
    }, [])

    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/service');
        stompClient = over(Sock);
        stompClient.connect({}, Connected, notConnected);
    }

    const Connected = () => {
        stompClient.subscribe('/chatroom/'+id, MessageReceived);
        console.log("subscribed");
    }

    const notConnected = () => {
        alert("connection fail");
    }

    const MessageReceived = (payload) => {
        console.log("received");
        setTotalChat((totalChat) => [...totalChat, JSON.parse(payload.body),]);
        console.log(totalChat);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = () => {
        let sendMessage = {
            content: message,
            sender: userName
        }
        console.log(sendMessage);
        stompClient.send("/app/message/" + id, {}, JSON.stringify(sendMessage));
        setMessage("");
    }

    return(
        <div className="chat_container">
            <div className="chat_message">
                {
                    totalChat.map((singleMessage, i) => {
                        return(
                        <div index={i} className={singleMessage.sender == userName?"myMessage":"chatMessage"}>
                            <h6>{singleMessage.sender}</h6>
                            <p>{singleMessage.content}</p>
                        </div>
                    )
                    })
                }
            </div>
            <div className="send_message">
                <input placeholder="enter some message" className="input_message" 
                onChange={handleMessageChange} value={message}></input>
                <button className="send_message_button" onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat;