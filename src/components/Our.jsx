import React from "react";
import { Row, Col } from "react-bootstrap";
import old_man from "../assets/img/old_man.webp";
import our_line from "../assets/img/our_line.png";

const Our = () => {
  return (
    <section className="bg_black py-5 position-relative">
      <div className="bg_green position-absolute"></div>

      <div className="container">
        <Row className="align-items-center">
          <Col
            xl={6}
            className="p-lg-5 d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            <div className="position-relative old_man_img">
              <img
                className="position-relative z_5 w-100"
                src={old_man}
                alt="old_mans"
              />
              <div className="box_green position-absolute"></div>
            </div>
          </Col>
          <Col
            xl={6}
            className="mt-sm-5 mt-lg-0"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative">
              <img
                className="position-absolute our_line_img d-sm-block d-none"
                src={our_line}
                alt="our_line"
              />
              Our Methodology
            </p>
            <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 pt-3">
              Quisque arcu erat aenean iaculis nisl molestie et tellus. In purus
              aliquam mauris quis molestie ornare mauris egestas nibh. Arcu sed
              neque est lacus vivamus mattis libero.
            </p>
            <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
              Quisque arcu erat aenean iaculis nisl molestie et tellus. In purus
              aliquam mauris quis molestie ornare mauris egestas nibh. Arcu sed
              neque est lacus vivamus mattis libero.
            </p>
            <button className="fw_600 ff_Plus fs_xsm clr_white Learn_btn mt-3 all_btn_hover effect">
              Learn more
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Our;
