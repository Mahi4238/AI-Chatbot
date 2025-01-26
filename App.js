import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: "user", text: userInput }]);
    setUserInput("");
  };

  return (
    <div>
      <h1>AI-Powered Chatbot</h1>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
