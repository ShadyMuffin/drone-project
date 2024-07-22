import Logo from "./Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toogleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <ScrollToTop />
      <nav className="bg-black p-4 hidden md:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex justify-center space-x-4 flex-grow">
            <li>
              <Link
                className="text-white hover:text-[#7FFFD4] font-sans p-3 text-xl"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-[#7FFFD4] font-sans p-3 text-xl"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-[#7FFFD4] font-sans p-3 text-xl"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="rounded cursor-pointer fixed right-10 block md:hidden w-[30px] bg-emerald-600 hover:text-emerald-600 hover:bg-white transition ease-in-out"
        onClick={toogleMenu}
      >
        {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          menuOpen
            ? "text-white w-[70%] h-[100%] md:hidden shadow-emerald-600 shadow-md mb-[100%] fixed top-0 left-0 bg-black ease-in-out duration-500"
            : "fixed left-[100%] ease-out duration-500"
        }
      >
        <ul className="mt-12 ml-7 ">
          <li className="p-3 hover:text-[#7FFFD4] border-b border-emerald-800">
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="p-3 hover:text-[#7FFFD4] border-b border-emerald-800">
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="p-3 hover:text-[#7FFFD4] border-b border-emerald-800">
            <Link to="/contact" onClick={handleLinkClick}>
              Conatct
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
