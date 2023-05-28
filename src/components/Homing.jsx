import React from "react";
import { Row, Col } from "react-bootstrap";
import honimg_img from "../assets/img/honimg_img.webp";

const Homing = () => {
  return (
    <section className="bg_black py-4">
      <div className="container">
        <Row className="align-items-center flex-column-reverse flex-xl-row">
          <Col
            xl={6}
            xs={12}
            className="mt-5 mt-lg-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p className="fw_500 ff_Plus fs_lg clr_white position-relative z_5">
              The HOMING Method{" "}
            </p>
            <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 position-relative z_5">
              We will start by taking a detailed medical history, including any
              symptoms you may be experiencing. They will ask about your family
              history of eye diseases and other medical conditions.
            </p>
            {/* 1 */}
            <div className="d-flex mt-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#21995A" />
                <mask
                  id="mask0_252_839"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="17"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 11.5807L6.86022 9.72044L10.5807 13.4409L18.0215 6L19.8818 7.86022L10.5807 17.1613L5 11.5807Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_252_839)">
                  <path
                    d="M3.51221 2.65173H21.3703V20.5099H3.51221V2.65173Z"
                    fill="#FAFAFA"
                  />
                </g>
              </svg>

              <span className="ms-2">
                <p className="fw_500 ff_Plus fs_xsm clr_white mb-0">
                  Medical History - Patient Portal
                </p>
                <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 mt-2">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                </p>
              </span>
            </div>
            <hr className="line" />

            {/* 2 */}
            <div className="d-flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#21995A" />
                <mask
                  id="mask0_252_839"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="17"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 11.5807L6.86022 9.72044L10.5807 13.4409L18.0215 6L19.8818 7.86022L10.5807 17.1613L5 11.5807Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_252_839)">
                  <path
                    d="M3.51221 2.65173H21.3703V20.5099H3.51221V2.65173Z"
                    fill="#FAFAFA"
                  />
                </g>
              </svg>
              <span className="ms-2">
                <p className="fw_500 ff_Plus fs_xsm clr_white mb-0">
                  Lab Test (Insurance Covered)
                </p>
                <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 mt-2">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                  purus aliquam mauris
                </p>
              </span>
            </div>
            <hr className="line" />
            {/* 3 */}
            <div className="d-flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#21995A" />
                <mask
                  id="mask0_252_839"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="17"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 11.5807L6.86022 9.72044L10.5807 13.4409L18.0215 6L19.8818 7.86022L10.5807 17.1613L5 11.5807Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_252_839)">
                  <path
                    d="M3.51221 2.65173H21.3703V20.5099H3.51221V2.65173Z"
                    fill="#FAFAFA"
                  />
                </g>
              </svg>
              <span className="ms-2">
                <p className="fw_500 ff_Plus fs_xsm clr_white mb-0">
                  Customized Macular Program Report
                </p>
                <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7 mt-2">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                  purus aliquam mauris
                </p>
              </span>
            </div>
          </Col>
          <Col
            xl={6}
            xs={12}
            className="d-flex flex-column align-items-center"
            data-aos-duration="3000"
            data-aos="fade-left"
          >
            <div className="position-relative">
              <img
                className="position-relative z_5 w-100"
                src={honimg_img}
                alt="honimg_img"
              />
              <div className="homin_green position-absolute"></div>
              <div className="homing_back_effect homin_green position-absolute"></div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Homing;
