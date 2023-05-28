import React from "react";
import Mynav from "../components/Mynav";
import Abouthero from "../components/Abouthero";
import { TestHead } from "../components/TestHead";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Asked from "../components/Asked";
import Testimoialsslider from "../components/Testimoialsslider";

const Testimonials = () => {
  return (
    <div>
      <Mynav />
      <TestHead />
      <Video />
      <Testimoialsslider />
      <Asked />
      <Footer />
    </div>
  );
};

export default Testimonials;
