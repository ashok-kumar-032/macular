import React from "react";
import Success_man from "../assets/img/Success_man.webp";
import { Col, Row } from "react-bootstrap";

const Success = () => {
  return (
    <section className="bg_light_green py-5 position-relative d-flex align-items-center vh_100">
      <div className="position-absolute Success_bg_effect"></div>

      <div className="container d-flex flex-column justify-content-center">
        <img
          className="w_60 d-none d-lg-block position-absolute end-0"
          src={Success_man}
          alt="Success_man"
        />

        <Row className=" d-flex align-items-center">
          <Col
            lg={6}
            xs={12}
            className="d-flex justify-content-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="Success_back px-4 py-2 smfi9sf">
              <p className="fw_500 ff_Plus fs_xl clr_white mb-0">
                Success: Strive,{" "}
                <span className="d-block">Thrive, and Shine</span>
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 max_w_470 pt-2">
                When it comes to achieving success, there are certain qualities
                that can help you reach your goals. Had it not been for our
                success in many patients we may never have pursued macular
                degeneration
              </p>
              <button className="fw_600 fs_xsm ff_Poppins More_btn mt-4 mb-3 all_btn_hover effect ">
                Learn More
              </button>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <img
              src={Success_man}
              alt="Success_man"
              className="w-100 d-block d-lg-none"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Success;
