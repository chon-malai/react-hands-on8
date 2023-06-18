import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <hr className={classes.line} />
      <div className={classes.footer}>
        <p>About Us</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
