import React, { useState } from 'react';
import './RegisterPage.css'; // 假設您會有一個對應的 CSS 檔案

const RegisterPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    // 這裡應該包含與後端 API 交互的邏輯
    console.log('Register with:', username, password, avatar);
    // 假設註冊成功後，您可以這樣設置用戶
    setUser({ username, avatar });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setAvatar(file);
    } else {
      alert("只支持 JPG 和 PNG 格式的圖片！");
    }
  };

  return (
    <div className="register-page">
      <h2>註冊</h2>
      <form onSubmit={handleRegister}>
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
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleAvatarChange}
        />
        <button type="submit">註冊</button>
      </form>
    </div>
  );
};

export default RegisterPage;