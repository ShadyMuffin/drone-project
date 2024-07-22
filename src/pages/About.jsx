import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import AboutCards from "../Components/AboutCards";
import CallToAction from "../Components/CallToAction";

function About() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="max-w-full">
        <div className="grid grid-col">
          <div className="container mx-auto p-4">
            <Navbar />
          </div>
          <AboutUs />
          <AboutCards />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
