import React from "react";
import "./supportus-styles.scss";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/ngos.jpg";

const SupportUs = () => (
  <div className="supportus">
    <img src="./Banner-1-1000x436.jpg" alt="" />
    <div className="supportus-heading">
      <u>
        <h1>Support Us</h1>
      </u>
    </div>
    <div className="supportus-subheading">
      <h2>Help us To Help the Animals</h2>
    </div>
    <div className="supportus-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      temporibus excepturi ea facere repudiandae saepe, minus quaerat illum
      blanditiis quisquam soluta, eligendi doloremque ab possimus molestiae vero
      qui, at quas quasi. Molestiae maxime incidunt sint recusandae voluptatum
      quo quas dicta atque, praesentium ad libero quidem nihil consequuntur
      inventore distinctio amet nam aspernatur reprehenderit consequatur eius
      omnis deserunt? Itaque delectus enim praesentium ipsa ea. Atque eveniet
      nisi soluta perferendis impedit minus quasi animi culpa quod, officia
      aliquid pariatur consectetur ullam fugiat. Ratione quaerat deserunt
      numquam aperiam mollitia reiciendis obcaecati quia, saepe facere fugit
      perspiciatis odit facilis nobis velit sint iure consectetur unde
      necessitatibus accusantium? Provident, harum ipsa amet natus incidunt
      earum suscipit maiores molestiae. Sint dicta voluptates officiis cumque
      ea, ad nesciunt voluptatem. Incidunt, aliquam perspiciatis placeat facilis
      sapiente quos ullam ex eius dolore, dolores quia eligendi sequi rerum,
      fuga error nulla id sit? Ab magnam quam neque molestias, libero quibusdam?
    </div>
    <div className="supportus-button-container">
      {""}
      <NavLink className="supportus-volunteer-button" to="/donate">
        {" "}
        <button className="supportus-volunteer-btn">Volunteer</button>{" "}
      </NavLink>
      <NavLink className="supportus-donate-button" to="/donate">
        {" "}
        <button className="supportus-donate-btn">Donate Now</button>{" "}
      </NavLink>
    </div>
    <img src={img1} alt="" />
  </div>
);

export default SupportUs;
