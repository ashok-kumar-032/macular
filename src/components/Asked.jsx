import React, { useState } from "react";
import asked from "../assets/img/asked.png";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const Asked = () => {
  const [tabs, setTabs] = useState("tab1");
  const changeTabs = (e) => {
    setTabs(e.target.id);
  };
  return (
    <section className="bg_black py-sm-5">
      <div className="container py-sm-5 pb-5">
        <div
          className="d-flex flex-column align-items-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_500 d-inline-block ff_Plus fs_xl clr_white opacity_9 mb-0 position-relative">
            <img
              className="position-absolute asked_img d-sm-block d-none"
              src={asked}
              alt="asked"
            />
            Frequently Asked Questions
          </p>
        </div>
        <Row className="mt-5">
          <Col xl={4} data-aos="fade-right" data-aos-duration="2000">
            <nav className="nav_tabs">
              <ul className="align-items-center justify-content-center ps-0">
                <li>
                  <button
                    id="tab1"
                    onClick={changeTabs}
                    className={
                      tabs === "tab1"
                        ? "asked_back fw_600 ff_Roboto clr_white fs_sm"
                        : "back_effect fw_600 ff_Roboto clr_white fs_sm"
                    }
                  >
                    Customer Questions
                    <span className="ms-5 ps-sm-5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15039 21.1C6.90039 20.85 6.77539 20.554 6.77539 20.212C6.77539 19.87 6.90039 19.5743 7.15039 19.325L14.4754 12L7.12539 4.65C6.89206 4.41667 6.77539 4.125 6.77539 3.775C6.77539 3.425 6.90039 3.125 7.15039 2.875C7.40039 2.625 7.69639 2.5 8.03839 2.5C8.38039 2.5 8.67606 2.625 8.92539 2.875L17.3254 11.3C17.4254 11.4 17.4964 11.5083 17.5384 11.625C17.5804 11.7417 17.6011 11.8667 17.6004 12C17.6004 12.1333 17.5794 12.2583 17.5374 12.375C17.4954 12.4917 17.4247 12.6 17.3254 12.7L8.90039 21.125C8.66706 21.3583 8.37939 21.475 8.03739 21.475C7.69539 21.475 7.39972 21.35 7.15039 21.1Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    id="tab2"
                    onClick={changeTabs}
                    className={
                      tabs === "tab2"
                        ? "asked_back fw_600 ff_Roboto clr_white fs_sm"
                        : "back_effect fw_600 ff_Roboto clr_white fs_sm"
                    }
                  >
                    Tech Support Questions
                    <span className="ms-sm-5 ps-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15039 21.1C6.90039 20.85 6.77539 20.554 6.77539 20.212C6.77539 19.87 6.90039 19.5743 7.15039 19.325L14.4754 12L7.12539 4.65C6.89206 4.41667 6.77539 4.125 6.77539 3.775C6.77539 3.425 6.90039 3.125 7.15039 2.875C7.40039 2.625 7.69639 2.5 8.03839 2.5C8.38039 2.5 8.67606 2.625 8.92539 2.875L17.3254 11.3C17.4254 11.4 17.4964 11.5083 17.5384 11.625C17.5804 11.7417 17.6011 11.8667 17.6004 12C17.6004 12.1333 17.5794 12.2583 17.5374 12.375C17.4954 12.4917 17.4247 12.6 17.3254 12.7L8.90039 21.125C8.66706 21.3583 8.37939 21.475 8.03739 21.475C7.69539 21.475 7.39972 21.35 7.15039 21.1Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </button>
                  <hr className="footer_line" />
                </li>
              </ul>
            </nav>
          </Col>
          <Col
            xl={8}
            className="ps-xl-5"
            data-aos-duration="3000"
            data-aos="fade-left"
          >
            <div className={tabs === "tab1" ? "d-block" : "d-none"}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      How long does it take to see improvements with dry AMD?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Do Blood Tests Improve?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Is this Anti-Aging Medicine?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      What would slow improvement in Dry or Wet AMD?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={tabs === "tab2" ? "d-block" : "d-none"}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      What would slow improvement in Dry or Wet AMD?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Is this Anti-Aging Medicine?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Is this Anti-Aging Medicine?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Do Blood Tests Improve?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <p className="mb-0 clr_white fs_sm fw_500 ff_Plus">
                      How long does it take to see improvements with dry AMD?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 clr_white fs_xsm fw_500 ff_Plus opacity_7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Asked;
