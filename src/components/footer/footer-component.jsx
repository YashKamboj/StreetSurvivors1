import React from "react";
import "./footer-styles.scss";
import { FaApple, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footer-1">
      <h4>
        {" "}
        <u>Donate </u>{" "}
      </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        inventore ut qui ipsa commodi sequi doloribus perferendis corrupti
        aliquid fuga.
      </p>

      <div>
        <Link to="/donate">
          {" "}
          <button className="footerdonatebtn">Donate Now</button>{" "}
        </Link>
      </div>
    </div>

    <div className="footer-2">
      <h4>
        <u>Get In Touch </u>
      </h4>
      <hr />
      <div className="footersocialicons">
        <FaApple size="8%" className="social" />
        <FaFacebook size="8%" className="social" />
        <FaInstagram size="8%" className="social" />
        <FaTwitter size="8%" className="social" />
      </div>
    </div>
  </div>
);

export default Footer;
