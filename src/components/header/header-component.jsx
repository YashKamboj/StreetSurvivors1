import React, { useState } from "react";
import "./header-styles.scss";
import { Link } from "react-router-dom";

function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header active" : "header"}>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        Home{" "}
      </Link>

      <Link to="/aboutus" style={{ textDecoration: "none" }}>
        {" "}
        About Us{" "}
      </Link>

      <Link to="/supportus" style={{ textDecoration: "none" }}>
        {" "}
        Support Us{" "}
      </Link>

      <Link to="/donate" style={{ textDecoration: "none" }}>
        {" "}
        Donate{" "}
      </Link>
      <Link to="/signin" style={{ textDecoration: "none" }}>
        {" "}
        SignIn{" "}
      </Link>
    </div>
  );
}

export default Header;
