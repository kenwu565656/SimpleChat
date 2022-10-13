import React from "react";
import ChatPage from "./component/ChatPage/ChatPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import StartingPage from "./component/StartingPage/StartingPage";

const App = () => {
  return(
    <BrowserRouter>
    <div className="App">

    
      <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
      </div>
    </BrowserRouter>
      
    
  )
}
export default App;
