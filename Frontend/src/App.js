import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import CreatePostPage from './pages/CreatePost';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Use 'element' to render components */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
