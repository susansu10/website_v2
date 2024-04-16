import React, { useState } from 'react';
import './LoginPage.css'; // 假設您會有一個對應的 CSS 檔案

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 這裡應該包含與後端 API 交互的邏輯
    console.log('Login with:', username, password);
    // 假設登入成功後，您可以這樣設置用戶
    setUser({ username });
  };

  return (
    <div className="login-page">
      <h2>登入</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="用戶名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default LoginPage;