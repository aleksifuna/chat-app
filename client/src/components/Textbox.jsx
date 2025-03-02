import React from "react";

export default function Textbox() {
  return (
    <div className="w-full max-w-[80%] bg-white p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Send
        </button>
      </div>
    </div>
  );
}
