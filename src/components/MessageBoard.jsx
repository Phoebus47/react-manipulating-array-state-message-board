import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([
    "Hello all ! This is first message.",
  ]);
  const [messageText, setMessageText] = useState("");

  const handleTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    if (messageText.trim() === "") return;
    setMessages([...messages, messageText]);
    setMessageText("");
  };

  const deleteMessage = (messageIndex) => {
    setMessages(messages.filter((_, index) => index !== messageIndex));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={addMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleTextChange}
          />
        </label>
        <button className="submit-message-button" type="submit">Submit</button>
      </form>
      <div className="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
