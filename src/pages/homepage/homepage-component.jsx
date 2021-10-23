import React from "react";
import "./homepage-styles.scss";

import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const HomePage = () => (
  <div className="homepage">
    <div>
      <img src="./Screenshot (26).png" alt="" />
      <div className="slider">
        <AwesomeSlider
          animation="cubeAnimation"
          className="slider"
          media={[
            {
              source: "./Screenshot (26).png",
            },
            {
              source: "./Screenshot (37).png",
            },
            {
              source: "./Screenshot (26).png",
            },
          ]}
        />
      </div>
    </div>
    <div className="addoptordonateoptions">
      <div className="addoptadog">
        <Link to="/supportus">
          {" "}
          <FaApple />{" "}
        </Link>
        <h3>
          <Link to="/supportus" style={{ textDecoration: "none" }}>
            <p>Adopt a Dog</p>
          </Link>
        </h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
        ducimus commodi quisquam a perspiciatis, possimus tempore
        quia,asperiores
        <h4>
          <Link to="/supportus" style={{ textDecoration: "none" }}>
            Click Here
          </Link>
        </h4>
      </div>

      <div className="Donateforacause">
        <Link to="donate" style={{ textDecoration: "none" }}>
          <FaApple />
        </Link>
        <h3>
          <Link to="donate" style={{ textDecoration: "none" }}>
            <p>Donate for a Cause</p>
          </Link>
        </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo a
        adipisci perferendis amet nemo. Quam enim voluptatibus nisi rerum cum
        <h4>
          <Link to="donate" style={{ textDecoration: "none" }}>
            Click Here
          </Link>
        </h4>
      </div>
    </div>

    <div className="smallhomepageaboutus">
      <div align="center">
        {" "}
        <h1>Street Survivors</h1>{" "}
      </div>
      <div className="aboutushomepagecontent">
        <div className="aboutushomepageimage">
          <Link to="/aboutus">
            {" "}
            <img src="./Screenshot (26).png" alt="" />{" "}
          </Link>
        </div>
        <div className="smallhomepageaboutusdescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est
          doloremque, corrupti nulla illo saepe voluptatem sed accusamus
          expedita veniam accusantium libero fuga ratione modi, quidem optio
          odio quis possimus earum excepturi quos ea iure temporibus! Autem
          placeat ullam ab quibusdam, expedita, distinctio sit quidem nostrum,
          amet animi eum tenetur vel quaerat alias! Sunt autem iste ab nulla,
          deserunt sequi eaque quam quo architecto porro illum est distinctio
          ullam dolore corrupti eum non voluptatum consequuntur velit esse fuga
          praesentium atque! Fugiat nemo corrupti eveniet ex dolorem, aut
          impedit error quibusdam. Quae, dolores dicta officia esse accusantium
          perferendis suscipit illo ipsam!
          <h4>
            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              Read more
            </Link>
          </h4>
        </div>
      </div>
    </div>

    <div className="fullorgphoto">
      <Link to="/aboutus">
        {" "}
        <img src="./Screenshot (37).png" alt="" />{" "}
      </Link>
    </div>
  </div>
);

export default HomePage;
