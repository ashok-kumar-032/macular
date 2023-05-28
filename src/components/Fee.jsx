import React from "react";
import { Row, Col } from "react-bootstrap";
import fee from "../assets/img/fee.png";
import fee_woman from "../assets/img/fee_woman.webp";
import fee_l from "../assets/img/fee_l.png";
import fee_r from "../assets/img/fee_r.png";

const Fee = () => {
  return (
    <section className="bg_black py-5 position-relative">
      <div className=" position-absolute fee_bg_effect"></div>

      <div className="container">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right" data-aos-duration="2000">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative max_w_580">
                <img
                  className="position-absolute fee_line_img d-sm-b lock d -none"
                  src={fee}
                  alt="fee"
                />
                Fee Structure
              </p>

              <img
                className="fee_woman_w mt-5"
                src={fee_woman}
                alt="fee_woman"
              />
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div
              className="fee_green_box py-3 ps-4 pe-5"
              data-aos-duration="3000"
              data-aos="fade-left"
            >
              <p className="fw_500 ff_Plus fs_md clr_white">
                One Time Enrollment $3000/y
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia consequat duis enim
              </p>
            </div>
            <div
              className="fee_green_box_2 py-3 ps-4 pe-5 my-4 position-relative"
              data-aos-duration="2000"
              data-aos="fade-left"
            >
              <p className="fw_500 ff_Plus fs_md clr_white">
                Medical Grade Supplements $80-125/m
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia consequat duis enim{" "}
              </p>
              <img
                className="position-absolute fee_l_img"
                src={fee_l}
                alt="fee_l"
              />
              <img
                className="position-absolute fee_r_img"
                src={fee_r}
                alt="fee_r"
              />
            </div>
            <div
              className="fee_green_box py-3 ps-4 pe-5"
              data-aos-duration="1500"
              data-aos="fade-left"
            >
              <p className="fw_500 ff_Plus fs_md clr_white">
                Maintenance $450/ Lab check
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia consequat duis enim{" "}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Fee;
