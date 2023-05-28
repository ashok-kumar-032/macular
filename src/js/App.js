import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Our from "../components/Our";
import Homing from "../components/Homing";
import Optimize from "../components/Optimize";
import Morethan from "../components/Morethan";
import Success from "../components/Success";
import Whatour from "../components/Whatour";
import Eligible from "../components/Eligible";
import Experts from "../components/Experts";
import Asked from "../components/Asked";
import Fee from "../components/Fee";
import Mynav from "../components/Mynav";
import { Disease } from "../components/Disease";

function App() {
  return (
    <div className="overflow-hidden">
      <Mynav />
      <Hero />
      <Disease />
      <Our />
      <Homing />
      <Optimize />
      <Morethan />
      <Success />
      <Eligible />
      <Fee />
      <Experts />
      <Whatour />
      <Asked />
      <Footer />
    </div>
  );
}
export default App;
