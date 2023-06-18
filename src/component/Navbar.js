import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbarcontainer}>
      <div className={classes.navbarlink}>
        <img src="logo.png" alt="logo" className={classes.logo} />

        <div className={classes.link}>
          <p>About Us</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
