import React from "react";
import classes from "./Titleblog.module.css";

const Titleblog = () => {
  return (
    <div className={classes.titleblog}>
      <p className={classes.blogstyle}>Blog</p>
      <p className={classes.viewstyle}>View All</p>
    </div>
  );
};

export default Titleblog;
