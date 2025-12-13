import React, { useState } from "react";
import { faq } from "../data/faq";
import "../styles/ChatBot.css";

const sectionMapping = {
  "about": "about",         // id="about"
  "skills": "skills",       // id="skills"
  "projects": "projects",   // id="projects"
  "contact": "contact",     // id="contact"
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();

    // Check FAQ
    const matched = faq.find(item =>
      item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    const botReply = matched ? matched.answer : "Sorry, I don’t have an answer for that. 😅";
    
    // Scroll to section if keyword matches
    Object.keys(sectionMapping).forEach(key => {
      if (lowerInput.includes(key)) {
        const section = document.getElementById(sectionMapping[key]);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
    }, 300);

    setInput("");
  };

  return (
    <>
      {open && (
        <div className="chatbox">
          <div className="chat-header">
            <h4>ChatBot 🤖</h4>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </>
  );
};

export default ChatBot;
