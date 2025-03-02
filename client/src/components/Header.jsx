import React from "react";

export default function Header() {
  const username = localStorage.getItem("username");
  const room = localStorage.getItem("room");
  return (
    <div className="w-full max-w-[80%] p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        {`Welcome ${username} to room ${room}`}
      </h1>
      <hr />
    </div>
  );
}
