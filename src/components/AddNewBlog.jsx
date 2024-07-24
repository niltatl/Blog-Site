import React, { useState } from "react";
import "./AddNewBlog.css";

function AddNewBlog({ onAddBlog }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    image: "",
    likes: 0,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog(formData);
    setFormData({
      title: "",
      content: "",
      author: "",
      date: "",
      image: "",
      likes: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="add-new-blog-form">
      <h2 className="title2">Add New Blog Page</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          onChange={handleChange}
          name="author"
          value={formData.author}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          onChange={handleChange}
          name="date"
          value={formData.date}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          onChange={handleChange}
          name="image"
          value={formData.image}
        />
      </div>
      <button type="submit">Add New Blog</button>
    </form>
  );
}

export default AddNewBlog;
