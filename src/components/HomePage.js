import React from 'react';
import './HomePage.css'; // 假設您會有一個對應的 CSS 檔案

const HomePage = ({ user }) => {
  return (
    <div className="home-page">
      <img src="/images/logo192.png" alt="Profile" className="profile-pic" />
      <h1>歡迎來到我的網站！</h1>
      <p>這裡是我的個人介紹...</p>
    </div>
  );
};

export default HomePage;