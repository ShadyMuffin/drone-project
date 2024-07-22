import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      <div className="p-0 m-5 pt-28">
        <div className=" mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-18">
            <div className="pb-20">
              <img
                className="object-cover rounded-lg mx-auto shadow-lg shadow-emerald-600"
                src="https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sample Image"
              />
            </div>
            <div className="p-5 pt-0 mt-0 m-5 content-center mx-auto">
              <p className="text-emerald-600 text-3xl text-pretty text-center font-mono pt-0 p-9 cursor-pointer">
                Ready to elevate your project with breathtaking drone footage?
                {""}
                <Link
                  to="/contact"
                  className=" cursor-pointer font-medium text-white underline dark:text-white hover:no-underline"
                >
                  Contact Us
                </Link>
                {""} today to discuss your needs and see how we can bring your
                vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
