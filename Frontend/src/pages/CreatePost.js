import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Use navigate instead of history

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) return alert('You must be logged in to create a post');

      // Removed the unused 'response' variable
      await axios.post(
        'http://localhost:5000/api/posts',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/'); // Use navigate() instead of history.push()
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  return (
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">
        <h3 className="card-title">Create Post</h3>
        <form onSubmit={handleCreatePost}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
