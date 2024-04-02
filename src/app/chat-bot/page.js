"use client"
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you today?", sender: "ChatGPT" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: "User" }]);
      setInputValue('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border border-gray-300 bg-[#fff] rounded-lg p-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'ChatGPT' ? 'text-left mb-2' : 'text-right mb-2'}>
            <span className={message.sender === 'ChatGPT' ? 'bg-gray-200 py-1 px-2 rounded-lg' : 'bg-blue-500 text-white py-1 px-2 rounded-lg'}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="flex  items-center justify-center bg-blue-500 text-white px-4 py-[6px] rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleMessageSend}
        >
          <FaPaperPlane className="mr-2 text-[12px]" />
          Send
        </button>
      </div>
    </div>
  );
}