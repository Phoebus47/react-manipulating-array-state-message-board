import React from "react";
import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([
    "Hello all ! This is first message.",
    "Hello all ! This is second message.",
    "Hello all ! This is third message.",
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  }

  const handleDelete = (index, e) => {
    e.stopPropagation();

    const updatedMessages = [...messages];

    updatedMessages.splice(index, 1);

    setMessages(updatedMessages);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={handleSubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </label>
        <button className="submit-message-button">Submit</button>
      </form>

      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className="message" style={{ fontSize: '2.5rem', padding: '16px', margin: '24px 0' }}>
            {message}
            <button className="delete-button" onClick={(e) => handleDelete(index, e)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
