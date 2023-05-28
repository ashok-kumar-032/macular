import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Success from "../components/Success";
import Whatour from "../components/Whatour";
import Mynav from "../components/Mynav";
import Journey from "../components/Journey";
import Abouthero from "../components/Abouthero";
import Ourteam from "../components/Ourteam";
import Morethan from "../components/Morethan";
import Asked from "../components/Asked";

function About() {
  return (
    <div className="overflow-hidden">
      <Mynav />
      <Abouthero />
      <Journey />
      <Ourteam />
      <Morethan />
      <Success />
      <Whatour />
      <Asked />
      <Footer />
    </div>
  );
}
export default About;
