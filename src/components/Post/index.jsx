import React from "react";

import { Link } from "react-router-dom";

import styles from "./Post.module.css";

const Post = ({ id, img, category, title, description }) => {
  return (
    <div className={styles.cart}>
      <Link to={`/post/${id}`}>
        <img src={img} className={styles.img} alt="post picture" />
      </Link>
      <div className="footer">
        <ul className={styles.category}>
          {category.map((category, i) => {
            return <li key={i}>{category}</li>;
          })}
        </ul>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Post;
