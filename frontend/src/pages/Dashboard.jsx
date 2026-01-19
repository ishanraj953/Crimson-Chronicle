import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Events from "../Components/Events";
import LogoSlider from "../Components/LogoSlider";
import CardWrap from "../Components/IconCard/CardWrap";
import HackethonCard from "../Components/Hackethons/HackethonCard";
import Vision from "../Components/Vision";
import Testimonial from "../Components/Testimonial/Testimonial";

function Dashboard() {


  return (
    <div>
      <Home />
      <LogoSlider />
      <About />
      <CardWrap />
      <Events />
      <Vision />
      <HackethonCard />
      <Testimonial />
    </div>
  );
}

export default Dashboard;
