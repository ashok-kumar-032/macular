import React from "react";
import what_line from "../assets/img/what_line.png";

const Journey = () => {
  return (
    <section className="bg_black pt-5 position-relative">
      <div className="position-absolute time_bg_effect_1"></div>
      <div className="position-absolute time_bg_effect_2"></div>
      <div className="position-absolute time_bg_effect_3"></div>
      <div class="container pt-4">
        <div
          className="d-flex flex-column align-items-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative max_w_580 text-center">
            <img
              className="position-absolute timrline_line_img"
              src={what_line}
              alt="what_line"
            />
            Our Journey
          </p>
        </div>
        <div class="timeline-width pt-5 mt-sm-5">
          <div class="timeline mt-5">
            <div class="timeline_box right">
              <div
                class="content box_time timeline_border_line_right"
                data-aos-duration="3000"
                data-aos="fade-left"
              >
                <p class="fw_500 ff_Plus fs_md clr_white">16 May, 2013</p>
                <p class="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                  My mother had macular degeneration for the last 15 years.
                  After conducting research on the disease, I successfully
                  treated her, and she showed improvement within six months.
                </p>
              </div>
            </div>
            <div class="timeline_box left">
              <div
                class="content box_time timeline_border_line_left"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <p class="fw_500 ff_Plus fs_md clr_white">2015</p>
                <p class="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                  A patient named Paddy did not respond to injections for her
                  eye treatment. I conducted research and found an alternative
                  treatment that did not involve injections. As a result,
                  Paddy's vision improved, and she was able to see clearly.
                </p>
              </div>
            </div>
            <div class="timeline_box right">
              <div
                class="content box_time timeline_border_line_right"
                data-aos-duration="2000"
                data-aos="fade-left"
              >
                <p class="fw_500 ff_Plus fs_md clr_white">2017</p>
                <p class="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                  In 2017, I studied migraines and worked with 69 patients.
                  Within three to six months of treatment, 54 patients showed
                  improvement in their vision.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline_box left">
          <div
            class="content box_time timeline_border_line_left"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <p class="fw_500 ff_Plus fs_md clr_white">2021</p>
            <p class="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
              In 2020, I studied 365 cases of eye disease and conducted research
              on them. In 2021, I conducted a test based on my research, and the
              results showed a recovery rate of 48% for dry AMD and 60% for wet
              AMD patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
