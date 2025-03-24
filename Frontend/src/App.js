import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; 
import LoginPage from './pages/Login';
import CreatePostPage from './pages/CreatePost';
import HomePage from './pages/Home'
import Navbar from './Navbar';
import PostDetailsPage from './pages/PostDetails'

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/post/:id" element={<PostDetailsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
