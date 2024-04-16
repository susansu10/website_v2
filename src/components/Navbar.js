import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">首頁</Link>
      {user ? (
        <Link to="/message-board" className="nav-item">留言板</Link>
      ) : (
        <>
          <Link to="/register" className="nav-item">註冊</Link>
          <Link to="/login" className="nav-item">登入</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;