import React from "react";
import Header from "../components/Header";
import Chatbox from "../components/Chatbox";
import Textbox from "../components/Textbox";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

export default function Chat() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <Header />
        <Chatbox socket={socket} />
        <Textbox socket={socket} />
      </div>
    </div>
  );
}
