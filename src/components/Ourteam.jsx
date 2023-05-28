import React from "react";
import brian from "../assets/img/brian.webp";
import george from "../assets/img/george.webp";
import { Row, Col } from "react-bootstrap";

const Ourteam = () => {
  return (
    <section className="bg_black py-5 position-relative">
      <div className="position-absolute teem_bg_effect_l"></div>

      <div className="container">
        <p
          className="fw_500 ff_Plus fs_xl clr_white text-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          Our Team
        </p>
        <Row className="align-items-center mt-5 pt-5">
          <Col
            lg={6}
            className="d-flex flex-column align-items-center"
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            <div className="position-relative">
              <img
                className="position-relative z_5 w-100"
                src={brian}
                alt="brian"
              />
              <div className="brian_box_green position-absolute"></div>
            </div>
          </Col>
          <Col
            lg={6}
            className="mt-4 mt-lg-0"
            data-aos="fade-down-left"
            data-aos-duration="3000"
          >
            <p className="fw_500 ff_Plus fs_lg clr_white">
              George W. Rozakis, MD
            </p>
            <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
              Dr. Rozakis is a board certified biomedical engineer who studied
              medicine at Cornell Medical Center and studied Ophthalmology at
              the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
              Wellness / Functional Medicine & The Optimization of Biochemistry
              for over 15 years. He has applied this science age-related chronic
              conditions. Dr. Rozakis won the advancements in healthcare award
              in Cleveland, Ohio (beating out the Cleveland Clinic) in 2015 for
              his work in Advanced Wellness and advocates for this approach to
              health care to his patients and colleagues.
            </p>
            <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
              Dr. Rozakis pioneered the field of Lasik refractive surgery,
              phakic refractive lenses, and the use of hormones and other
              advanced testing to treat macular degeneration, migraine,
              parkinson's, arthritis, insomnia, menopause, low testosterone,
              auto immune disease and other age-related chronic conditions.{" "}
            </p>
          </Col>
        </Row>
        {/* 2 */}
        <div className="py-5 my-5 position-relative">
          <div className="position-absolute teem_r_bg_effect"></div>
          <div className="position-absolute teem_l_bg_effect"></div>
          <div className="position-absolute teem_c_bg_effect"></div>

          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col
              lg={6}
              className="mt-4 mt-lg-0 position-relative z_5"
              data-aos="fade-up-right"
              data-aos-duration="3000"
            >
              <p className="fw_500 ff_Plus fs_lg clr_white">
                Brian Bakke, Ph.D.
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                Dr. Bakke also holds a master’s degree in human nutrition from
                Columbia University. His master’s thesis work focused on
                studying the clinical nutrition practice patterns used by eye
                professionals in the prevention and treatment of Age-Related
                Macular Degeneration (AMD).
              </p>
              <p className="fw_400 ff_Roboto fs_xsm clr_white opacity_7">
                Prior to partnering with the Advanced Wellness Program through
                Investihealth, Dr. Bakke spent 6 years working as chief science
                officer with a medical consulting company. His work as chief
                science officer focused on collaborating with primary care
                physicians in developing personalized nutrition and bioidentical
                hormone based care plans for improving clinical outcomes for
                patients with complex medical conditions. Previously, Dr. Bakke
                spent 7 years working with the multi- national chemistry,
                biotechnology and life science companies BASF and Syngenta as a
                senior chemist.
              </p>
            </Col>
            <Col
              lg={6}
              className="d-flex flex-column align-items-center"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              <div className="position-relative">
                <img
                  className="position-relative z_5 w-100"
                  src={george}
                  alt="george"
                />
                <div className="george_box_green position-absolute"></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
