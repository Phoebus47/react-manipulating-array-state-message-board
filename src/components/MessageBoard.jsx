import { useState } from "react";

function MessageBoard() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  const handleSetPostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const addPost = (event) => {
    event.preventDefault();
    if (postText.trim() === "") return;
    setPosts([...posts, postText]);
    setPostText("");
  };

  const remove =(index)=>{
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message Board</h1>

      {/* Input & Button */}
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleSetPostTextChange}
            value={postText}
          />
        </label>
        <button className="submit-message-button" onClick={addPost}>
          Submit
        </button>
      </div>

      {/* Board */}
      <div className="board">
        {posts.map((item, index) => (
          <div key={index} className="message">
            <h1>{item}</h1>
            <button className="delete-button" onClick={() => remove(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
