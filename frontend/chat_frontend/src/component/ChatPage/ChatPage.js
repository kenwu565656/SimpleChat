import React, { useState } from "react";
import Chat from "../Chat/Chat";
import Background from "../Background/Background";
import Top from "../Top/Top";
import NameForm from "../NameForm/NameForm";
import { useParams } from "react-router-dom";
import "./ChatPage.css";

const ChatPage = () => {
    const [nameFormOpen, setNameFormOpen] = useState(true);;
    const [userName, setUserName] = useState("");
    const {id} = useParams();
    return(
      <div className="App">
        <Top roomId={id}/>
        <div className="main">
          <Background />
          <Chat id = {id} userName={userName}/>
        </div>
        <NameForm open={nameFormOpen} setOpen={setNameFormOpen} setUserName={setUserName}/>
      </div>
    )
  }
  export default ChatPage;