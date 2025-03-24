import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([
    "Hello all ! This is first message.",
  ]);
  const [messageText, setMessageText] = useState();

  const handleTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageText);
    setMessage(newMessage);
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
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
        <button className="submit-message-button">Submit</button>
      </form>
      <div className="board">
        {message.map((message, index) => (
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
