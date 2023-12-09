import React, { useState } from "react";
import "./BlogCard.css";

import Modal from "react-modal";
import { div } from "@tensorflow/tfjs";

const BlogCard = ({ title, image, description }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign:"right",
      margin:"1rem",
      display:"flex",
      flexDirection:"column",
      gap:"1rem",
      padding:"1rem"
    },
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
            {showFullText ? (
              <Modal
                isOpen={toggleText}
                onRequestClose={toggleText}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <button onClick={toggleText} className="btn-donate">Close</button>
                <p className="modal-desc">{description}</p>
              </Modal>
            ) : (
              description.slice(0, 200)
            )}
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
