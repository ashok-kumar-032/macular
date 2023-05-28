import React from "react";
import { Col, Row } from "react-bootstrap";
import nav_logo from "../assets/img/nav_logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg_blue pt-5">
      <div className="container py-sm-5">
        <Row>
          <Col xl={4} data-aos="fade-right" data-aos-duration="3000">
            <img src={nav_logo} alt="nav_logo" />
            <p className="fw_400 fs_xsm ff_Roboto clr_footer max_w_280 mt-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit
            </p>
            <div className="d-flex mt-5 pt-3x">
              <span className="footer_img d-flex align-items-center justify-content-center">
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.96156 9.06324H6.73354L7.44234 6.22806H4.96156V4.81048C4.96156 4.08042 4.96156 3.39289 6.37915 3.39289H7.44234V1.01134C7.21127 0.980862 6.33874 0.912109 5.41731 0.912109C3.49294 0.912109 2.12638 2.08658 2.12638 4.24344V6.22806H0V9.06324H2.12638V15.088H4.96156V9.06324Z"
                    fill="#FBFBFB"
                  />
                </svg>
              </span>
              <span className="footer_img d-flex align-items-center justify-content-center ms-4">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1239 1.74767C14.5781 1.99574 13.9898 2.15877 13.3802 2.23673C14.004 1.86107 14.486 1.26569 14.7128 0.549804C14.1245 0.904201 13.4724 1.15228 12.7848 1.29404C12.2249 0.684475 11.4381 0.330078 10.5451 0.330078C8.87939 0.330078 7.51851 1.69096 7.51851 3.3708C7.51851 3.61179 7.54686 3.8457 7.59648 4.06542C5.07317 3.93784 2.82629 2.7258 1.33074 0.890025C1.06848 1.33657 0.919637 1.86107 0.919637 2.41393C0.919637 3.47004 1.45123 4.40564 2.27343 4.93724C1.77019 4.93724 1.30239 4.79548 0.891285 4.58284V4.60411C0.891285 6.0784 1.9403 7.3117 3.32954 7.58813C2.88351 7.71019 2.41526 7.72717 1.96156 7.63774C2.15408 8.24198 2.53111 8.77069 3.03965 9.14955C3.5482 9.52842 4.16269 9.73839 4.79674 9.74995C3.72195 10.6008 2.38967 11.0607 1.01887 11.0541C0.777878 11.0541 0.536888 11.04 0.295898 11.0116C1.64261 11.8763 3.24448 12.3796 4.95976 12.3796C10.5451 12.3796 13.6141 7.74406 13.6141 3.7252C13.6141 3.59053 13.6141 3.46295 13.607 3.32828C14.2024 2.903 14.7128 2.36432 15.1239 1.74767Z"
                    fill="#FBFBFB"
                  />
                </svg>
              </span>
              <span className="footer_img d-flex align-items-center justify-content-center ms-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.279 0.0888672H3.89988C2.91329 0.0899226 1.96741 0.482312 1.26978 1.17994C0.572156 1.87756 0.179766 2.82344 0.178711 3.81004V10.1892C0.179766 11.1758 0.572156 12.1217 1.26978 12.8193C1.96741 13.5169 2.91329 13.9093 3.89988 13.9103H10.279C11.2656 13.9093 12.2115 13.5169 12.9091 12.8193C13.6067 12.1217 13.9991 11.1758 14.0002 10.1892V3.81004C13.9991 2.82344 13.6067 1.87756 12.9091 1.17994C12.2115 0.482312 11.2656 0.0899226 10.279 0.0888672ZM7.08945 10.1892C6.45861 10.1892 5.84194 10.0021 5.31742 9.65164C4.7929 9.30117 4.38408 8.80302 4.14267 8.22021C3.90126 7.63739 3.8381 6.99607 3.96117 6.37735C4.08424 5.75864 4.38801 5.19031 4.83408 4.74424C5.28015 4.29817 5.84848 3.99439 6.4672 3.87132C7.08591 3.74825 7.72723 3.81142 8.31005 4.05283C8.89287 4.29424 9.39101 4.70305 9.74148 5.22758C10.092 5.7521 10.279 6.36877 10.279 6.99961C10.2781 7.84527 9.94182 8.65604 9.34385 9.25401C8.74588 9.85198 7.93511 10.1883 7.08945 10.1892ZM11.0764 3.81004C10.9187 3.81004 10.7645 3.76327 10.6334 3.67565C10.5023 3.58803 10.4001 3.4635 10.3397 3.31779C10.2794 3.17209 10.2636 3.01176 10.2943 2.85708C10.3251 2.7024 10.4011 2.56032 10.5126 2.4488C10.6241 2.33728 10.7662 2.26134 10.9209 2.23057C11.0755 2.1998 11.2359 2.21559 11.3816 2.27595C11.5273 2.3363 11.6518 2.4385 11.7394 2.56963C11.827 2.70076 11.8738 2.85493 11.8738 3.01264C11.8738 3.22412 11.7898 3.42694 11.6403 3.57648C11.4907 3.72602 11.2879 3.81004 11.0764 3.81004ZM9.21583 6.99961C9.21583 7.42017 9.09112 7.83128 8.85747 8.18096C8.62382 8.53064 8.29173 8.80319 7.90318 8.96413C7.51464 9.12507 7.08709 9.16718 6.67462 9.08513C6.26214 9.00309 5.88325 8.80057 5.58587 8.50319C5.28849 8.20581 5.08597 7.82692 5.00393 7.41444C4.92188 7.00197 4.96399 6.57442 5.12493 6.18588C5.28587 5.79733 5.55842 5.46524 5.9081 5.23159C6.25778 4.99794 6.66889 4.87323 7.08945 4.87323C7.6534 4.87323 8.19426 5.09726 8.59303 5.49603C8.99181 5.8948 9.21583 6.43566 9.21583 6.99961Z"
                    fill="#FBFBFB"
                  />
                </svg>
              </span>
            </div>
          </Col>
          <Col xl={8}>
            <Row className="mt-4 mt-xl-0">
              <Col
                sm={4}
                xs={6}
                className="d-flex justify-content-xl-center"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <ul className="ps-0">
                  <li>
                    <p className="fw_900 fs_xsm ff_Roboto clr_white">
                      Ouick Links
                    </p>
                  </li>
                  <li className="mt-3">
                    <Link
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      to="/About"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      to="/"
                    >
                      Location
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      to="/"
                    >
                      Process
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      to="/Testimonials"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} data-aos="fade-left" data-aos-duration="2000">
                <ul className="ps-0">
                  <li>
                    <p className="fw_900 fs_xsm ff_Roboto clr_white">Support</p>
                  </li>
                  <li className="mt-3">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="tel:9812438052"
                    >
                      +0 00 000 0000
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="gmail:av6017819@gmil.com"
                    >
                      info@macularpro.com
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} data-aos="fade-left" data-aos-duration="3000">
                <ul className="ps-0">
                  <li>
                    <p className="fw_900 fs_xsm ff_Roboto clr_white">Search</p>
                  </li>
                  <li>
                    <span className="Search_box d-flex align-items-center w-100">
                      <input
                        className="Search_box_1 w-100"
                        type="text"
                        placeholder="Search"
                      />
                      <span className="search_translate">
                        <svg
                          className="pointer"
                          width="38"
                          height="38"
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="38"
                            height="38"
                            rx="4"
                            fill="#00FFCC"
                            fill-opacity="0.5"
                          />
                          <path
                            opacity="0.7"
                            d="M23.1563 21.375H22.2181L21.8856 21.0544C23.0896 19.6579 23.7513 17.8751 23.75 16.0313C23.75 14.5046 23.2973 13.0123 22.4492 11.7429C21.601 10.4736 20.3955 9.48427 18.9851 8.90006C17.5747 8.31584 16.0227 8.16299 14.5254 8.46082C13.0281 8.75865 11.6528 9.49379 10.5733 10.5733C9.49379 11.6528 8.75865 13.0281 8.46082 14.5254C8.16299 16.0227 8.31584 17.5747 8.90006 18.9851C9.48427 20.3955 10.4736 21.601 11.7429 22.4492C13.0123 23.2973 14.5046 23.75 16.0313 23.75C17.9431 23.75 19.7006 23.0494 21.0544 21.8856L21.375 22.2181V23.1563L27.3125 29.0819L29.0819 27.3125L23.1563 21.375ZM16.0313 21.375C13.0744 21.375 10.6875 18.9881 10.6875 16.0313C10.6875 13.0744 13.0744 10.6875 16.0313 10.6875C18.9881 10.6875 21.375 13.0744 21.375 16.0313C21.375 18.9881 18.9881 21.375 16.0313 21.375Z"
                            fill="#FAFAFA"
                          />
                        </svg>
                      </span>
                    </span>
                  </li>
                  <li className="mt-4">
                    <p className="fw_900 fs_xsm ff_Roboto clr_white mb-0">
                      Legal
                    </p>
                  </li>
                  <li className="mt-2">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="#"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="fw_400 fs_xsm ff_Roboto clr_footer home effect"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <hr className="footer_line" />
      <div
        className=" d-flex flex-column align-items-center justify-content-center py-3"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        <p className="fw_400 ff_Roboto fs_xsm clr_white mb-0 ps-3 ps-sm-0">
          MacularProgram© 2023 | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
