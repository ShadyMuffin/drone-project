import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto mt-auto py-28 px-4 grid lg:grid-cols-1 gap-8 text-white">
        <div>
          <h1
            className="text-4xl font-bold font-sans italic text-emerald-600 text-center
          "
          >
            Lets Fly
          </h1>
          <p className="py-4 text-xl italic text-center">
            Hire us for stunning drone footage that captures unique angles and
            breathtaking views. Whether it is aerial photography, videography,
            real estate, or event coverage, our expert team delivers top-notch
            results every time. Let us elevate your project with precision and
            creativity.
          </p>
        </div>
        <div className="flex justify-between py-20">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
    </>
  );
};

export default Footer;
