import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./About";
import Testimonials from "./Testimonials";
import Loading from "../components/Loading";
import BackToTop from "../components/BaxkToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Main() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className="overflow-hidden">
      <BackToTop />
      <Loading />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}
export default Main;
