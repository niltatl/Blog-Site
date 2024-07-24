import React from "react";
import "./SortForm.css";

function SortForm({
  onSortByDateAsc,
  onSortByDateDesc,
  onSortByAuthorAsc,
  onSortByAuthorDesc,
}) {
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "authorAsc") {
      onSortByAuthorAsc();
    } else if (value === "authorDesc") {
      onSortByAuthorDesc();
    } else if (value === "dateAsc") {
      onSortByDateAsc();
    } else if (value === "dateDesc") {
      onSortByDateDesc();
    }
  };

  return (
    <div className="sort-form">
      <select className="sort-select" onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="dateAsc">Date: Oldest to Newest</option>
        <option value="dateDesc">Date: Newest to Oldest</option>
        <option value="authorAsc">Author: A-Z</option>
        <option value="authorDesc">Author: Z-A</option>
      </select>
    </div>
  );
}

export default SortForm;
