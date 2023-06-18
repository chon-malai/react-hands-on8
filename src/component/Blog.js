import React from "react";
import classes from "./Blog.module.css";

const Blog = (props) => {
  const { blog } = props;
  return (
    <div className={classes.content}>
      <div className={classes.author}>
        <p className={classes.name}>{blog.author}</p>
        <p className={classes.date}>{blog.date}</p>
        <p className={classes.time}>{blog.readingTime}</p>
      </div>
      <div>
        <p className={classes.title}>{blog.header}</p>
        <p className={classes.description}>{blog.description}</p>
      </div>
      <div className={classes.tagcontainer}>
        {blog.tags.map((tag) => {
          return (
            <p key={tag} className={classes.tag}>
              #{tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
