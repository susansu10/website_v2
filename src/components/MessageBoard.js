import React, { useState } from 'react';
import './MessageBoard.css'; // 假設您會有一個對應的 CSS 檔案

const MessageBoard = ({ user }) => {
  const [messages, setMessages] = useState([]); // 假設這是從後端獲取的留言列表
  const [newMessage, setNewMessage] = useState('');

  const handlePostMessage = (e) => {
    e.preventDefault();
    // 這裡應該包含與後端 API 交互的邏輯
    console.log('Post new message:', newMessage);
    // 假設發布成功後，您可以這樣更新留言列表
    setMessages([...messages, { text: newMessage, user }]);
    setNewMessage('');
  };

  const handleDeleteMessage = (messageIndex) => {
    // 這裡應該包含與後端 API 交互的邏輯
    console.log('Delete message at index:', messageIndex);
    // 假設刪除成功後，您可以這樣更新留言列表
    setMessages(messages.filter((_, index) => index !== messageIndex));
  };

  return (
    <div className="message-board">
      <h2>留言板</h2>
      {user && (
        <form onSubmit={handlePostMessage}>
          <textarea
            placeholder="寫下您的留言..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          />
          <button type="submit">發布留言</button>
        </form>
      )}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <img src={message.user.avatar || '/default-avatar.png'} alt="Avatar" className="avatar" />
            <p>{message.text}</p>
            {message.user.username === user.username && (
              <button onClick={() => handleDeleteMessage(index)}>刪除</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;