import React from "react";
import eye_r from "../assets/img/eye_r.png";
import eye_l from "../assets/img/eye_l.png";
import Optimize_plus_l from "../assets/img/Optimize_plus_l.png";
import Optimize_plus_s from "../assets/img/Optimize_plus_s.png";

const Optimize = () => {
  return (
    <section className="bg_black py-sm-5">
      <div
        className="container position-relative py-5"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        <div className="Optimize_bg text-center py-5 d-flex flex-column align-items-center position-relative px-sm-5 overflow-hidden">
          <span>
            <img
              className="position-absolute Optimize_r about_eye_animation"
              src={eye_r}
              alt="eye_r"
            />
            <img
              className="position-absolute Optimize_l about_eye_animation"
              src={eye_l}
              alt="eye_l"
            />
            <img
              className="position-absolute Optimize_plus_l about_plus_animation"
              src={Optimize_plus_l}
              alt="Optimize_plus_l"
            />
            <img
              className="position-absolute Optimize_plus_s_l about_plus_animation"
              src={Optimize_plus_s}
              alt="Optimize_plus_s"
            />
            <img
              className="position-absolute Optimize_plus_s_r d-md-block d-none about_plus_animation"
              src={Optimize_plus_s}
              alt="Optimize_plus_s"
            />
          </span>
          <div className="optimize_back_effect position-absolute"></div>
          <p className="fw_500 ff_Plus fs_xl clr_white mb-0 position-relative z_5">
            Optimize Biochemistry
          </p>
          <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 mb-4 max_w_580 pt-2 position-relative z_5">
            Lectus adipiscing pulvinar et praesent justo libero luctus tortor. A
            semper feugiat non dui ut egestas eu. Euismod eu fames ante in
            vestibulum duis in odio. Amet pharetra mauris at pellentesque. Netus
            libero nulla eu id.
          </p>
          <button className="fw_600 fs_xsm ff_Plus clr_white Book_btn d-inline-block mt-4 position-relative z_5 all_btn_hover effect">
            Book Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Optimize;
