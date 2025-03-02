import { React } from "react";
import Message from "./Message";
import messages from "../assets/messages";

export default function Chatbox() {
  // Sample chat data - you would replace this with your actual messages

  return (
    <div className="w-full max-w-[80%] h-[600px] flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden">
      {/* Messages container with scrolling */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
