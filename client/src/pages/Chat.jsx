import React from "react";
import Header from "../components/Header";
import Chatbox from "../components/Chatbox";
import Textbox from "../components/Textbox";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Chatbox />
      <Textbox />
    </div>
  );
}
