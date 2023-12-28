import "./App.scss";
import { Fragment } from "react";
import { HeaderBanner } from "./Components/HeaderBanner";
import { HeroSection } from "./Components/HeroSection";
import { VirutalTour } from "./Components/VirtualTourSection";
import { ImproveV } from "./Components/Improve-v";
import { GetFree } from "./Components/GetFree";
import { Teachers } from "./Components/Teachers";
import { StudentTestimonial } from "./Components/StudentsTestimonail";
import { Enquiry } from "./Components/Enquiry";
import { Footer } from "./Components/Footer";
import { CopyRights } from "./Components/CopyRights";
import CardCarousel from "./Components/Slider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <HeaderBanner />
      <HeroSection />
      <VirutalTour />
      <ImproveV />
      <CardCarousel />
      <GetFree />
      <Teachers />
      <StudentTestimonial />
      <Enquiry />
      <Footer />
      <CopyRights />
    </Fragment>
  );
}

export default App;
