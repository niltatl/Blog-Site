import React, { useState, useEffect } from "react";
import "./EditBlogForm.css";

function EditBlogForm({ blog, onUpdateBlog }) {
  const [formData, setFormData] = useState(blog);

  useEffect(() => {
    const formattedDate = new Date(blog.date).toISOString().split('T')[0];
    setFormData({ ...blog, date: formattedDate });
  }, [blog]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBlog(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-blog-form">
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
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Blog</button>
    </form>
  );
}

export default EditBlogForm;
