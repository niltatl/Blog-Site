import {
  faThumbsUp,
  faCalendarAlt,
  faUser,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function BlogItem({
  id,
  title,
  content,
  likes: initialLikes,
  date,
  author,
  image,
  onEdit,
  onDelete,
}) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="blog-item">
      <div className="blog-image">
        <img src={image} alt="blog image" />
      </div>
      <strong className="blog-title">{title}</strong>
      <p className="blog-content">{content.slice(0, 150)} </p>
      <div className="blog-info">
        <div className="blog-author">
          <FontAwesomeIcon icon={faUser} /> {author}
        </div>

        <div className="blog-date">
          <FontAwesomeIcon icon={faCalendarAlt} /> {date}
        </div>
        <div className="blog-likes">
          <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} /> {likes}
        </div>
        <div className="actions">
          <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => onEdit(id)}/>
          <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDelete(id)} />
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
