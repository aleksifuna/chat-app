import { React, useState, useEffect } from "react";
import Message from "./Message";

export default function Chatbox({ socket }) {
  const [msgs, setMsgs] = useState([]);
  const user = localStorage.getItem("username");
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
        </div>
      </div>
    </div>
  );
}
