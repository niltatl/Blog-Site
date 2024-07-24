import React, { useState } from "react";
import { blogData as initialBlogData } from "../data/blogData";
import BlogItem from "./BlogItem";
import AddNewBlog from "./AddNewBlog";
import EditBlogForm from "./EditBlogForm";
import SortForm from "./SortForm.jsx";
import "./BlogList.css";

function BlogList() {
  const [blogData, setBlogData] = useState(initialBlogData);
  const [editingBlog, setEditingBlog] = useState(null);

  const handleAddBlog = (newBlog) => {
    const formattedDate = new Date(newBlog.date).toISOString().split("T")[0];
    newBlog.date = formattedDate;
    setBlogData([newBlog, ...blogData]);
  };

  const handleEditBlog = (id) => {
    const blogToEdit = blogData.find((blog) => blog.id === id);
    setEditingBlog(blogToEdit);
  };

  const handleUpdateBlog = (updatedBlog) => {
    setBlogData(
      blogData.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
    setEditingBlog(null);
  };

 

  const handleDeleteBlog = (id) => {
    const confirmed  = window.confirm("Are you sure  you want to delete this blog?")
    if(confirmed) {
      setBlogData(blogData.filter((blog) => blog.id !== id))
    }
  }

  const handleSortByDateAsc = () => {
    const sortedData = [...blogData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setBlogData(sortedData);
  };

  const handleSortByDateDesc = () => {
    const sortedData = [...blogData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setBlogData(sortedData);
  };
  const handleSortByAuthorAsc = () => {
    const sortedData = [...blogData].sort((a, b) =>
      a.author.localeCompare(b.author)
    );
    setBlogData(sortedData);
  };

  const handleSortByAuthorDesc = () => {
    const sortedData = [...blogData].sort((a, b) =>
      b.author.localeCompare(a.author)
    );
    setBlogData(sortedData);
  };

  return (
    <div className="container">
      <AddNewBlog onAddBlog={handleAddBlog} />

      <h2 className="title1">Blog Pages</h2>

      <SortForm
        onSortByDateAsc={handleSortByDateAsc}
        onSortByDateDesc={handleSortByDateDesc}
        onSortByAuthorAsc={handleSortByAuthorAsc}
        onSortByAuthorDesc={handleSortByAuthorDesc}
      />

      <div className="blog-wrapper">
        {editingBlog && (
          <EditBlogForm blog={editingBlog} onUpdateBlog={handleUpdateBlog} />
        )}
        {blogData.map((item) => (
          <BlogItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            likes={item.likes}
            date={item.date}
            author={item.author}
            image={item.image}
            onEdit={handleEditBlog}
            onDelete={handleDeleteBlog}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
