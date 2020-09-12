import React, { useEffect, useState } from "react";
import logo from "./images/logo2.png";
import avatar from "./images/avatar.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // happens when you scroll 100 pixels down

        handleShow(true);
      } else {
        handleShow(false);
      }

      // before you fire off the listener again, remove the previous one
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="Netflix avatar" />
    </div>
  );
}

export default Navbar;
