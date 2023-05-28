import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import slider_image from "../assets/img/slider_image.png";

export const Disease = () => {
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
    <div className="bg_black">
      <Container>
        <div
          className="disease_big_box"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <div className="disease_small_box py-4">
            <p className="mb-0 text-center fw_500 ff_Plus fs_xl clr_white">
              Symptoms of the disease
            </p>
            <p className="text-center fw_400 ff_Roboto fs_xsm clr_white opacity_7">
              Macular degeneration is a progressive eye disease that can cause a
              range of problems, including:
            </p>
          </div>
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={7} xs={12} className="ps-5">
              <Slider {...settings} ref={btns}>
                <div>
                  <p className="fw_500 ff_Plus clr_white fs_md mb-0">
                    Blurred or distorted central vision
                  </p>
                  <p className="fw_400 ff_Roboto fs_xsm clr_white pt-3">
                    This is one of the primary symptoms of macular degeneration.
                    As the disease progresses, it can cause the vision to become
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    clear vision.
                  </p>
                </div>
                <div>
                  <p className="fw_500 ff_Plus clr_white fs_md mb-0">
                    Blurred or distorted central vision
                  </p>
                  <p className="fw_400 ff_Roboto fs_xsm clr_white pt-3">
                    This is one of the primary symptoms of macular degeneration.
                    As the disease progresses, it can cause the vision to become
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    clear vision.
                  </p>
                </div>
              </Slider>
              <div className=" d-flex align-items-center pb-5 pb-lg-0">
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
                <span
                  className="arrow_btn ms-3"
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
                      fill="#162220"
                    />
                    <path
                      d="M15.4186 10.3442L22.1745 17.0801C22.2547 17.1602 22.3116 17.2471 22.3453 17.3407C22.379 17.4342 22.3955 17.5345 22.395 17.6414C22.395 17.7483 22.3784 17.8485 22.3453 17.9421C22.3121 18.0356 22.2552 18.1225 22.1745 18.2027L15.4186 24.9586C15.2315 25.1457 14.9976 25.2393 14.7169 25.2393C14.4363 25.2393 14.1957 25.139 13.9952 24.9386C13.7948 24.7381 13.6945 24.5042 13.6945 24.2369C13.6945 23.9696 13.7948 23.7357 13.9952 23.5352L19.8891 17.6414L13.9952 11.7475C13.8081 11.5604 13.7146 11.3297 13.7146 11.0555C13.7146 10.7812 13.8148 10.5441 14.0153 10.3442C14.2158 10.1437 14.4496 10.0435 14.7169 10.0435C14.9842 10.0435 15.2181 10.1437 15.4186 10.3442Z"
                      fill="#27BBA2"
                    />
                  </svg>
                </span>
              </div>
            </Col>
            <Col lg={5} xs={12}>
              <img src={slider_image} alt="slider_image" className="w_90" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
