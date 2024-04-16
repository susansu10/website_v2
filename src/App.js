import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import MessageBoard from './components/MessageBoard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/message-board" element={<MessageBoard />} />
          {/* 如果有其他路由，也要按照上述格式添加 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;