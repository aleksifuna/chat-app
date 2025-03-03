import { React, useState, useEffect, useRef } from "react";
import Message from "./Message";

export default function Chatbox({ socket }) {
  const [msgs, setMsgs] = useState([]);
  const messagesEndRef = useRef(null);
  const user = localStorage.getItem("username");

  // Function to scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on("Message", (msg) => {
      user === msg.user
        ? (msg.isCurrentUser = true)
        : (msg.isCurrentUser = false);
      setMsgs((prevMsgs) => {
        msg.id = prevMsgs.length + 1;
        return [...prevMsgs, msg];
      });
    });
  }, [socket, user]);

  // Effect to scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [msgs]);

  if (msgs.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-[80%] h-[600px] flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden">
      {/* Messages container with scrolling */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {msgs.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}
