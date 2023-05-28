import React from "react";
import Slider from "react-slick";
import what_line from "../assets/img/what_line.png";
import { Row, Col } from "react-bootstrap";
import say_img from "../assets/img/say_img.svg";

const Whatour = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const btns = React.useState();
  return (
    <section className="bg_black py-sm-5 ">
      <div className="container py-5">
        <div
          className="d-flex flex-column align-items-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative">
            <img
              className="position-absolute what_line_img d-sm-block d-none"
              src={what_line}
              alt="what_line"
            />
            What our patients say
          </p>
          <p className="fw_400 ff_Roboto fs_xsm clr_white text-center max_w_630">
            Viverra nisi integer convallis ultricies tellus mauris. Ante purus
            pretium ac vitae morbi in ultricies ut. Orci pharetra adipiscing ut.
          </p>
        </div>
        <Row className="align-items-center">
          <Col
            xl={6}
            className="position-relative d-flex flex-column align-items-center"
            data-aos="fade-down-right"
            data-aos-duration="3000"
          >
            <img
              className="w-10 0 old_man_im g_w position-relative fee_woman_w"
              src={say_img}
              alt="say_img"
            />
            <div className=" position-absolute Experts_bg_effect"></div>
          </Col>
          <Col xl={6} data-aos="fade-up-left" data-aos-duration="2000">
            <Slider {...settings} ref={btns}>
              <div>
                <p className="fw_500 ff_Plus clr_white fs_md mb-0">
                  Alex willson
                </p>
                <p className="fw_400 ff_Roboto fs_xsm clr_white pt-3">
                  Lectus adipiscing pulvinar et praesent justo libero luctus
                  tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                  fames ante in vestibulum duis in odio. Amet pharetra mauris at
                  pellentesque. Netus libero nulla eu id.
                </p>
                <button className="clr_light_green fw_400 ff_Roboto fs_xsm Read_btn">
                  Read More...
                </button>
              </div>
              <div>
                <p className="fw_500 ff_Plus clr_white fs_md mb-0">
                  Alex willson
                </p>
                <p className="fw_400 ff_Roboto fs_xsm clr_white pt-3">
                  Lectus adipiscing pulvinar et praesent justo libero luctus
                  torton dui ut egestas eu. Euismod eu fames ante in vestibulum
                  duis in odio. Amet pharetra mauris at pellentesque. Netus
                  libero nulla eu id.
                </p>
                <button className="clr_light_green fw_400 ff_Roboto fs_xsm Read_btn">
                  Read More...
                </button>
              </div>
            </Slider>
            <div className="mt-4 d-flex align-items-center">
              <span
                className="arrow_btn arrow_crcl d-flex justify-content-center align-items-center rounded-circle pointer"
                onClick={() => btns.current.slickNext()}
              >
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14781 14.939L0.391918 8.20314C0.311729 8.12295 0.254795 8.03608 0.221116 7.94253C0.187437 7.84898 0.170865 7.74874 0.171399 7.64182C0.171399 7.5349 0.187971 7.43467 0.221116 7.34112C0.254261 7.24756 0.311195 7.16069 0.391918 7.0805L7.14781 0.324606C7.33492 0.137499 7.5688 0.0439453 7.84946 0.0439453C8.13013 0.0439453 8.37069 0.144181 8.57116 0.344653C8.77163 0.545125 8.87187 0.779008 8.87187 1.0463C8.87187 1.3136 8.77163 1.54748 8.57116 1.74795L2.6773 7.64182L8.57116 13.5357C8.75827 13.7228 8.85182 13.9535 8.85182 14.2277C8.85182 14.502 8.75159 14.7391 8.55112 14.939C8.35064 15.1395 8.11676 15.2397 7.84946 15.2397C7.58217 15.2397 7.34829 15.1395 7.14781 14.939Z"
                    fill="#27BBA2"
                  />
                </svg>
              </span>
              <button
                className="arrow_btn arrow_bg ms-3"
                onClick={() => btns.current.slickNext()}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.9247"
                    cy="17.6415"
                    r="17.6415"
                    stroke="#27BBA2"
                    stroke-width="0.801887"
                    fill="#151515"
                  />
                  <path
                    d="M15.4186 10.3442L22.1745 17.0801C22.2547 17.1602 22.3116 17.2471 22.3453 17.3407C22.379 17.4342 22.3955 17.5345 22.395 17.6414C22.395 17.7483 22.3784 17.8485 22.3453 17.9421C22.3121 18.0356 22.2552 18.1225 22.1745 18.2027L15.4186 24.9586C15.2315 25.1457 14.9976 25.2393 14.7169 25.2393C14.4363 25.2393 14.1957 25.139 13.9952 24.9386C13.7948 24.7381 13.6945 24.5042 13.6945 24.2369C13.6945 23.9696 13.7948 23.7357 13.9952 23.5352L19.8891 17.6414L13.9952 11.7475C13.8081 11.5604 13.7146 11.3297 13.7146 11.0555C13.7146 10.7812 13.8148 10.5441 14.0153 10.3442C14.2158 10.1437 14.4496 10.0435 14.7169 10.0435C14.9842 10.0435 15.2181 10.1437 15.4186 10.3442Z"
                    fill="#27BBA2"
                  />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Whatour;
