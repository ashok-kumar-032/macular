import React from "react";
import about_l from "../assets/img/about_l.png";
import eye_r from "../assets/img/eye_r.png";
import about_plus_l from "../assets/img/Optimize_plus_l.png";
import about_plus_s from "../assets/img/Optimize_plus_s.png";

const Aboutus = (props) => {
  return (
    <section className="bg_light_green py-5 position-relative overflow-hidden">
      <div className=" position-absolute about_bg_effect"></div>
      <div data-aos="flip-down" data-aos-duration="2000">
        <span>
          <img
            className="position-absolute about_r about_eye_animation"
            src={eye_r}
            alt="eye_r"
          />
          <img
            className="position-absolute about_l about_eye_animation"
            src={about_l}
            alt="about_l"
          />
          <img
            className="position-absolute about_plus_l about_plus_animation"
            src={about_plus_l}
            alt="about_plus_l"
          />
          <img
            className="position-absolute about_plus_s about_plus_animation"
            src={about_plus_s}
            alt="about_plus_s"
          />
        </span>
        <div className="container">
          <div className="py-5">
            <p className="fw_600 ff_Plus clr_white fs_2xl text-center mb-0 position-relative z_5">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
