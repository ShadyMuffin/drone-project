import { ReactTyped } from "react-typed";
import SimpleForm from "./SimpleForm";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 h-[auto] ">
        <div className="max-w-[300px] mt-[50px] w-full h-[400px] mx-auto text-center flex flex-col justify-center -z-50">
          <h1 className="md:text-5xl sm:text-3xl text-4xl font-bold md:py-6 relative text-white">
            Drones for
          </h1>
          <ReactTyped
            strings={["Weddings", "Real Estate", "Surveillance", "Inspection"]}
            typeSpeed={30}
            backSpeed={10}
            loop
            className="text-green-400 place-self-auto relative text-5xl font-mono font-bold whitespace-nowrap"
          />
        </div>
        <SimpleForm />
      </div>
    </div>
  );
};

export default Hero;
