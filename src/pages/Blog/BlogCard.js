import React, { useState } from "react";
import "./BlogCard.css";

const BlogCard = ({ title, image, description }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="blog-card" style={{ margin: "3rem" }}>
      <div className="card">
        <img
          src={image}
          style={{ height: "200px", objectFit: "cover" }}
          alt={title}
        />

        <div className="card-body">
          <h2>{title}</h2>
          <p>
            {showFullText ? description : description.slice(0, 200)}
            {description.length > 200 && (
              <span onClick={toggleText} className="read-more">
                {showFullText ? " Read Less" : " Read More"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
