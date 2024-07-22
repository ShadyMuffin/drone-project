import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-col">
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
