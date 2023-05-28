import React from "react";
import hero_img from "../assets/img/hero_img.webp";
import eye_l from "../assets/img/eye_l.png";
import eye_r from "../assets/img/eye_r.png";
import plus from "../assets/img/plus.png";
import clearly from "../assets/img/clearly.svg";

const Hero = () => {
  return (
    <section className="bg_black vh- 100 d-flex flex-column">
      {/* hero */}
      <div className="container hero_gol_1_r position-relative hero_gol flex-grow-1 pb-5">
        <p className="mb-0 clr_white position-absolute scrool text-uppercase z-5">
          scroll
        </p>
        <span>
          <img
            src={plus}
            alt="plus"
            className="about_plus_animation position-absolute scrool_plus"
          />
          <img
            className="position-absolute start_l about_plus_animation"
            src={plus}
            alt="plus"
          />
          <img
            className="position-absolute about_plus_animation start_r d-none d-sm-block"
            src={plus}
            alt="plus"
          />
          <img
            className="position-absolute about_eye_animation eye_l d-none d-sm-block"
            src={eye_l}
            alt="eye_l"
          />
          <img
            className="position-absolute about_eye_animation eye_r d-none d-sm-block"
            src={eye_r}
            alt="eye_r"
          />
        </span>
        <div className="hero_bg w-100 bg_black text-center d-flex align-items-center flex-column">
          <p className="fw_600 fs_2xl ff_Plus clr_white Seeing lh_120 position-relative z_5">
            Seeing life
            <span className="position-relative back_clearly">
              <img
                className="position-absolute top-0 start-0 w-100 z-n1"
                src={clearly}
                alt="clearly"
              />
              <span>clearly, </span>
            </span>
            with Macular Program
          </p>
          <div className="position-relative z_5 ">
            <img className="w_hero_img" src={hero_img} alt="hero_img" />
            <span className="hero_2_img position-absolute px-4 py-2 Required about_eye_animation">
              <p className="fw_500 fs_16 ff_Plus clr_white mb-0">
                No Injection
                <span className="d-block text-start">Required</span>
              </p>
            </span>

            <span className="hero_2_img position-absolute px-4 py-2 Method about_eye_animation">
              <p className="fw_500 fs_16 ff_Plus clr_white mb-0">
                Certificated <span className="d-block text-start">Method</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
