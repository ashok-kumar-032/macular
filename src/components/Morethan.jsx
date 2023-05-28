import React from "react";
import { Row, Col } from "react-bootstrap";
import what_line from "../assets/img/what_line.png";
import eye_wrinkles_2 from "../assets/img/eye_wrinkles_2.webp";

const Morethan = () => {
  return (
    <section className="bg_black py-lg-5">
      <div className="container py-5">
        <Row className="align-items-center">
          <Col
            lg={5}
            className="d-flex flex-column align-items-center justify-content-center"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <div className="position-relative">
              <img
                className="mor e_img w-100 z_5 position-relative pe-lg-5 me-lg-5"
                src={eye_wrinkles_2}
                alt="eye_wrinkles_2"
              />
              <div className=" position-absolute more_bg_effect"></div>
              <div className="position-absolute more_green"></div>

              <div className="position-absolute d-flex align-items-center Macular_box py-2 ps-2 pe-4 about_eye_animation">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.861816"
                    width="36"
                    height="36"
                    rx="18"
                    fill="#00FFCC"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M18.5 10.8618C13.5 10.8618 9.23 13.9718 7.5 18.3618C9.23 22.7518 13.5 25.8618 18.5 25.8618C23.5 25.8618 27.77 22.7518 29.5 18.3618C27.77 13.9718 23.5 10.8618 18.5 10.8618ZM18.5 23.3618C15.74 23.3618 13.5 21.1218 13.5 18.3618C13.5 15.6018 15.74 13.3618 18.5 13.3618C21.26 13.3618 23.5 15.6018 23.5 18.3618C23.5 21.1218 21.26 23.3618 18.5 23.3618ZM18.5 15.3618C16.84 15.3618 15.5 16.7018 15.5 18.3618C15.5 20.0218 16.84 21.3618 18.5 21.3618C20.16 21.3618 21.5 20.0218 21.5 18.3618C21.5 16.7018 20.16 15.3618 18.5 15.3618Z"
                    fill="#00FFCC"
                  />
                </svg>
                <p className="ps-4 mb-0 fw_400 ff_Poppins fs_xsm clr_white">
                  Macular <span className="d-block">Degeneration</span>
                </p>
              </div>
              <div className="position-absolute Retina_box p-4 about_eye_animation">
                <span className="d-flex align-items-center">
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="35"
                      height="35"
                      rx="12"
                      fill="#00FFCC"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M7.96208 14.8704L6 12.7924H10.3475C12.602 11.2988 15.2661 10.5 17.9933 10.5C20.7206 10.5 23.3847 11.2988 25.6392 12.7924H30L28.0379 14.8704C29.2053 15.9187 29.8976 17.3749 29.963 18.9195C30.0283 20.4641 29.4614 21.9709 28.3866 23.1091C27.3117 24.2473 25.8168 24.9239 24.23 24.9905C22.6431 25.0571 21.094 24.5081 19.9225 23.4642L18 25.5L16.0788 23.4654C15.2229 24.2372 14.1544 24.7493 13.004 24.9389C11.8537 25.1286 10.6715 24.9875 9.6023 24.533C8.53308 24.0786 7.62327 23.3305 6.98432 22.3803C6.34537 21.4302 6.00503 20.3193 6.005 19.1837H6.00625C6.0052 18.3717 6.17866 17.5685 6.51549 16.8257C6.85232 16.0829 7.34507 15.4168 7.96208 14.8704ZM23.9975 23.1333C24.8001 23.1333 25.5846 22.9016 26.252 22.4676C26.9193 22.0337 27.4394 21.4168 27.7465 20.6951C28.0537 19.9734 28.134 19.1793 27.9774 18.4132C27.8209 17.647 27.4344 16.9433 26.8669 16.3909C26.2994 15.8386 25.5763 15.4624 24.7892 15.31C24.002 15.1576 23.1861 15.2358 22.4446 15.5348C21.7031 15.8337 21.0694 16.3399 20.6235 16.9894C20.1776 17.6389 19.9396 18.4025 19.9396 19.1837C19.9396 20.2312 20.3671 21.2358 21.1281 21.9765C21.8891 22.7171 22.9213 23.1333 23.9975 23.1333ZM18 19.0697C18 16.4706 19.9425 14.2406 22.5037 13.2871C21.0768 12.7084 19.5461 12.4104 18.0002 12.4104C16.4543 12.4104 14.9237 12.7084 13.4967 13.2871C16.0579 14.241 18 16.471 18 19.0697ZM12.005 23.1333H12.0054C13.0818 23.1332 14.1141 22.717 14.8751 21.9762C15.6362 21.2354 16.0638 20.2306 16.0637 19.183C16.0637 18.1354 15.6361 17.1306 14.875 16.3899C14.1139 15.6491 13.0816 15.2329 12.0052 15.2329C10.9288 15.2329 9.89654 15.6491 9.13542 16.3899C8.3743 17.1306 7.94669 18.1354 7.94666 19.183C7.94664 20.2306 8.37419 21.2354 9.13527 21.9762C9.89636 22.717 10.9286 23.1332 12.005 23.1333ZM23.9975 17.113H23.9979C24.4187 17.113 24.83 17.2344 25.1799 17.462C25.5298 17.6895 25.8024 18.0129 25.9635 18.3913C26.1245 18.7696 26.1666 19.186 26.0845 19.5877C26.0024 19.9893 25.7998 20.3583 25.5023 20.6479C25.2048 20.9375 24.8257 21.1347 24.413 21.2146C24.0003 21.2945 23.5725 21.2535 23.1838 21.0968C22.795 20.94 22.4627 20.6746 22.229 20.3341C21.9952 19.9936 21.8704 19.5932 21.8704 19.1837V19.1792C21.8707 18.9076 21.9259 18.6387 22.033 18.3879C22.14 18.1371 22.2968 17.9092 22.4943 17.7173C22.6918 17.5255 22.9262 17.3734 23.1841 17.2697C23.4421 17.166 23.7184 17.1127 23.9975 17.113ZM12.005 17.113C12.4258 17.113 12.8371 17.2344 13.187 17.462C13.5368 17.6895 13.8095 18.0129 13.9706 18.3913C14.1316 18.7696 14.1737 19.186 14.0916 19.5877C14.0095 19.9893 13.8069 20.3583 13.5094 20.6479C13.2118 20.9375 12.8327 21.1347 12.4201 21.2146C12.0074 21.2945 11.5796 21.2535 11.1908 21.0968C10.8021 20.94 10.4698 20.6746 10.236 20.3341C10.0023 19.9936 9.8775 19.5932 9.8775 19.1837C9.8775 18.6345 10.1016 18.1078 10.5006 17.7195C10.8996 17.3312 11.4408 17.113 12.005 17.113Z"
                      fill="#00FFCC"
                    />
                  </svg>
                  <p className="fw_600 ff_Poppins fs_xsm clr_white mb-0 ps-3">
                    Patient Recover
                  </p>
                </span>
                <p className="fw_400 ff_Poppins fs_xsm clr_white max_w_200 pt-2">
                  We are using an injection to stop the growth factor of Retina
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            className="ps-lg-5 pt-5 mt-5 mt-lg-0"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <div className="ps-lg-5">
              <p className="fw_500 ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative lh_120">
                <img
                  className="position-absolute more_then_img d-sm-bloc k d -none "
                  src={what_line}
                  alt="what_line"
                />
                More than 50% patients recovered
              </p>
              <p className="fw_400 ff_Poppins fs_xsm clr_white opacity_7 pt-3">
                In 2013, We conducted a test with 365 dry and wet AMD patients.
                In this test recovery rate of patients is 48% of dry AMD and 60%
                of wet AMD. Another patient named Paddy, was suffering from dry
                AMD and temporary vision loss. Our strategies cured her and now
                she is living happily.
              </p>
              <button className="fw_600 fs_xsm ff_Plus clr_white Book_btn d-inline-block mt-4 all_btn_hover effect">
                Book Call
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Morethan;
