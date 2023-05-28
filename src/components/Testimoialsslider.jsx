import React from "react";
import { Row, Col } from "react-bootstrap";
import woman_slider from "../assets/img/woman_slider.png";
import man_slider from "../assets/img/man_slider.webp";
import Star_1 from "../assets/img/Star_1.png";
import Star_2 from "../assets/img/Star_2.png";
import Slider from "react-slick";
const Testimoialsslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const btns = React.useState();
  return (
    <section className="bg_black pb-5 pt-sm-5">
      <div className="container py-4">
        <button className="fw_500 ff_Roboto fs_sm clr_white AMD_btn_1">
          Wet AMD Testimonials
        </button>
        <button className="fw_500 ff_Roboto fs_sm clr_white AMD_btn ms-sm-3 mt-2 mt-sm-0 amd_hover">
          Dry AMD Testimonials
        </button>
      </div>
      <Slider {...settings} ref={btns}>
        <div className="p-4">
          <div
            className="slider_box"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <Row className="p-md-5 position-relative overflow-hidden">
              <div className="position-absolute slider_bg_effect"></div>

              <Col md={4}>
                <div className="position-relative">
                  <img
                    className="position-relative z_5 w-100"
                    src={woman_slider}
                    alt="woman_slider"
                  />
                  <div className="slider_box_green position-absolute"></div>
                </div>
              </Col>
              <Col md={8} className="ps-md-5 p-4 p-md-0">
                <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                  My experience with the Rozakis institute/Advanced-Wellness has
                  been a success. I was receiving the eye shots, but after the
                  nutritional program recommended by Dr. Rozakis, my eyesight in
                  my damaged eye improved and now I have gone from monthly shots
                  to a five month period, and I am expecting to stop them
                  altogether, soon These research have their hands on a valuable
                  remedy and are successful with their pioneering Thanks to
                  them!
                </p>
                <p className="fw_500 ff_Plus fs_mm clr_white">Rodney Gunther</p>
                <span className=" d-flex">
                  <img src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_2} alt="Star_2" />
                </span>
                <div className=" d-flex justify-content-end">
                  <span onClick={() => btns.current.slickPrev()}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17.6415"
                        cy="17.6415"
                        r="17.6415"
                        fill="#27BBA2"
                      />
                      <path
                        d="M20.1473 24.9385L13.3914 18.2027C13.3112 18.1225 13.2543 18.0356 13.2206 17.942C13.1869 17.8485 13.1704 17.7483 13.1709 17.6413C13.1709 17.5344 13.1875 17.4342 13.2206 17.3406C13.2538 17.2471 13.3107 17.1602 13.3914 17.08L20.1473 10.3241C20.3344 10.137 20.5683 10.0435 20.849 10.0435C21.1296 10.0435 21.3702 10.1437 21.5707 10.3442C21.7711 10.5446 21.8714 10.7785 21.8714 11.0458C21.8714 11.3131 21.7711 11.547 21.5707 11.7475L15.6768 17.6413L21.5707 23.5352C21.7578 23.7223 21.8513 23.953 21.8513 24.2272C21.8513 24.5015 21.7511 24.7386 21.5506 24.9385C21.3502 25.139 21.1163 25.2392 20.849 25.2392C20.5817 25.2392 20.3478 25.139 20.1473 24.9385Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </span>
                  <span
                    className="ms-4"
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
                        fill="#27BBA2"
                      />
                      <path
                        d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* 2 */}
        <div className="p-4" data-aos="flip-up" data-aos-duration="3000">
          <div className="slider_box">
            <Row className="p-md-5 position-relative overflow-hidden">
              <div className="position-absolute slider_bg_effect"></div>

              <Col md={4}>
                <div className="position-relative">
                  <img
                    className="position-relative z_5 w-100"
                    src={man_slider}
                    alt="man_slider"
                  />
                  <div className="slider_box_green position-absolute"></div>
                </div>
              </Col>
              <Col md={8} className="ps-md-5 p-4 p-md-0">
                <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                  My experience with the Rozakis institute/Advanced-Wellness has
                  been a success. I was receiving the eye shots, but after the
                  nutritional program recommended by Dr. Rozakis, my eyesight in
                  my damaged eye improved and now I have gone from monthly shots
                  to a five month period, and I am expecting to stop them
                  altogether, soon These research have their hands on a valuable
                  remedy and are successful with their pioneering Thanks to
                  them!
                </p>
                <p className="fw_500 ff_Plus fs_mm clr_white">Rodney Gunther</p>
                <span className=" d-flex">
                  <img src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_1} alt="Star_1" />
                  <img className="ps-2" src={Star_2} alt="Star_2" />
                </span>
                <div className=" d-flex justify-content-end align-items-center">
                  <span onClick={() => btns.current.slickPrev()}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17.6415"
                        cy="17.6415"
                        r="17.6415"
                        fill="#27BBA2"
                      />
                      <path
                        d="M20.1473 24.9385L13.3914 18.2027C13.3112 18.1225 13.2543 18.0356 13.2206 17.942C13.1869 17.8485 13.1704 17.7483 13.1709 17.6413C13.1709 17.5344 13.1875 17.4342 13.2206 17.3406C13.2538 17.2471 13.3107 17.1602 13.3914 17.08L20.1473 10.3241C20.3344 10.137 20.5683 10.0435 20.849 10.0435C21.1296 10.0435 21.3702 10.1437 21.5707 10.3442C21.7711 10.5446 21.8714 10.7785 21.8714 11.0458C21.8714 11.3131 21.7711 11.547 21.5707 11.7475L15.6768 17.6413L21.5707 23.5352C21.7578 23.7223 21.8513 23.953 21.8513 24.2272C21.8513 24.5015 21.7511 24.7386 21.5506 24.9385C21.3502 25.139 21.1163 25.2392 20.849 25.2392C20.5817 25.2392 20.3478 25.139 20.1473 24.9385Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </span>
                  <span
                    className="ms-4"
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
                        fill="#27BBA2"
                      />
                      <path
                        d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Testimoialsslider;
