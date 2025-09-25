import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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
        <div className="prose prose-sm max-w-none prose-invert prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-pre:my-2 prose-code:px-1 prose-code:py-0.5">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {String(message.message || "")}
          </ReactMarkdown>
        </div>
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
