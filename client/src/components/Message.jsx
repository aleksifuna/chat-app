import React from "react";

export default function Message({ message }) {
  return (
    <div
      key={message.id}
      className={`flex ${
        message.isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-lg ${
          message.isCurrentUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-white text-gray-800 rounded-bl-none"
        }`}
      >
        {!message.isCurrentUser && (
          <div className="font-bold text-sm">{message.user}</div>
        )}
        <p>{message.message}</p>
        <div
          className={`text-xs mt-1 ${
            message.isCurrentUser ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
}
