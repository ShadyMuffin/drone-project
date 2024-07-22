import { IoMdPin } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function ContactBanner() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-emerald-600 uppercase font-mono text-4xl font-bold m-20">
          Get in touch
        </h1>
      </div>
      <div className="text-white w-[auto] grid grid-col-1 lg:grid-cols-3 gap-5 justify-evenly ">
        <div className="pt-[20px] w-[300px] mx-auto flex flex-col items-center justify-center content-evenly h-80 bg-gray-800 rounded-lg">
          <div>
            <IoMdPin />
          </div>
          <h1 className="uppercase text-2xl font-mono font-bold underline underline-offset-8 decoration-white pb-8 cursor-default">
            Address
          </h1>
          <p className="whitespace-normal text-center">
            55G Thomas Wilkinson Ave 2158 Dural Sydney NSW Australia
          </p>
        </div>
        <div className="w-[300px] mx-auto flex flex-col items-center justify-center content-evenly h-80 bg-gray-800 rounded-lg">
          <div>
            <FaPhoneVolume />
          </div>
          <h1 className="uppercase text-2xl font-mono font-bold underline underline-offset-8 decoration-white pb-8 cursor-default">
            phone
          </h1>
          <p>0450464878</p>
        </div>
        <div className=" w-[300px] mx-auto flex flex-col items-center justify-center content-evenly h-80 bg-gray-800 rounded-lg">
          <div>
            <MdMarkEmailRead />
          </div>
          <h1 className="uppercase text-2xl font-mono font-bold underline underline-offset-8 decoration-white pb-8 cursor-default">
            email
          </h1>
          <p>FreeTimeActivities@hotmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
