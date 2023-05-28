import React from "react";
import video_line from "../assets/img/video_line.png";
import you_1 from "../assets/img/you_1.webp";
import you_2 from "../assets/img/you_2.webp";
import you_3 from "../assets/img/you_3.webp";
import you_4 from "../assets/img/you_4.webp";
import you_5 from "../assets/img/you_5.webp";
import you_6 from "../assets/img/you_6.webp";
import ReactPlayer from "react-player/lazy";
import { Col } from "react-bootstrap";
import video_thumbnail from "../assets/img/video.webp";
import Slider from "react-slick";
const Video = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_black py-5 position-relative">
      <div className="position-absolute video_bg_effect_1"></div>
      <div className="position-absolute video_bg_effect_2"></div>

      <div className="position-absolute video_bg_effect_6 end-0 bottom-0"></div>

      <div className="container">
        <div className="d-flex flex-column align-items-center pt-5">
          <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative max_w_580 text-center">
            <img
              className="position-absolute video_line_img"
              src={video_line}
              alt="video_line"
            />
            Video Testimonials
          </p>
        </div>
        {/* video */}
        <div className="pt-5 position-relative">
          <ReactPlayer
            className="w-100 video_height"
            light={video_thumbnail}
            url="https://youtu.be/5oH9Nr3bKfw"
          />
          <div className="position-absolute video_bg_effect_6 bottom-0 end-0 mt-5"></div>
          <div className="position-absolute video_bg_effect_3"></div>
          <div className="position-absolute video_bg_effect_4"></div>
        </div>
        <p className="fw_500 ff_Plus fs_lg clr_white py-5">
          A patient named Paddy, was suffering from dry AMD and temporary vision
          loss. Our strategies cured her and now she is living happily.
        </p>
        <Slider {...settings}>
          <Col lg={4} data-aos="flip-left" data-aos-duration="1500">
            <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_1}
                  alt="you_1"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">Jenny Wilson</p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} data-aos="flip-left" data-aos-duration="2000">
            <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_2}
                  alt="you_2"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">
                    Dianne Russell
                  </p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} data-aos="flip-left" data-aos-duration="3000">
            <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_3}
                  alt="you_3"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">Jacob Jones</p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} data-aos="flip-right" data-aos-duration="3000">
            <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_4}
                  alt="you_4"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">
                    Cameron Williamson
                  </p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lang={4} data-aos="flip-right" data-aos-duration="2000">
            <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_5}
                  alt="you_5"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">
                    Esther Howard
                  </p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} data-aos="flip-right" data-aos-duration="1500">
                        <div className="p-3 position-relative z_10">
              <div className="you_box">
                <img
                  className="w-100 rounded-top pointer"
                  src={you_6}
                  alt="you_6"
                />
                <div className="p-3">
                  <p className="fw_500 ff_Plus fs_sm clr_white">Eleanor Pena</p>
                  <p className="opacity_7 fw_400 fs_xsm ff_Roboto clr_white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Slider>
        <div className=" d-flex justify-content-center">
          <button className="fw_600 fs_xsm ff_Plus clr_white See_btn d-inline-block mt-4 all_btn_hover effect">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;
