import React from "react";
import "./Card.css";

const Card = ({ number, text, tags = [] }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-number">{number}</div>
        <div className="card-text">{text}</div>
        <div className="card-tags">
          <span>Tags</span>
          <div className="tags-list">
            {tags.map((tag) => (
              <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
