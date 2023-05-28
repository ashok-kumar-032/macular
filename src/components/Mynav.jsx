import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import nav_logo from "../assets/img/nav_logo.webp";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Mynav = () => {
  const [first, setfirst] = useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <section className="bg_black">
      <Nav className="py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center ">
              <img className="z-10 pointer" src={nav_logo} alt="nav_logo" />
            </div>
            <ul
              className={
                first
                  ? "nav_show d-flex gap-4 align-items-center 0"
                  : "nav_show d-flex showw gap-4 mb-0 align-items-center ps-0"
              }
            >
              <li>
                <Link
                  className="fw_400 fs_xsm ff_Plus clr_grey mb-0 ms-xl-4 home position-relative hover_line effect"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="w_400 fs_xsm ff_Plus clr_grey mb-0 ms-xl-4 home position-relative hover_line effect"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="w_400 fs_xsm ff_Plus clr_grey mb-0 ms-xl-4 home position-relative hover_line effect"
                  to="/Testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="w_400 fs_xsm ff_Plus clr_grey mb-0 ms-xl-4 home position-relative hover_line effect"
                  to="/"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  className="w_400 fs_xsm ff_Plus clr_grey mb-0 ms-xl-4 home position-relative hover_line effect"
                  to="/"
                >
                  Process
                </Link>
              </li>
              <li>
                <button className="fw_600 fs_xsm ff_Plus clr_white nav_btn d-block d-xl-none all_btn_hover effect">
                  Contact Us
                </button>
              </li>
            </ul>
            <button className="fw_600 fs_xsm ff_Plus clr_white d-none d-xl-block nav_btn effect_1 all_btn_hover effect">
              Contact Us
            </button>
            <div className="z-10 d-xl-none">
              <h3 className="clr_white menu_icon" onClick={clickshow}>
                {first ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
          </div>
        </div>
      </Nav>
    </section>
  );
};

export default Mynav;
