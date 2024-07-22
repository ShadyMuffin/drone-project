import ContactBanner from "../Components/ContactBanner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SimpleForm from "../Components/SimpleForm";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="max-w-full">
        <div className="grid grid-col">
          <div className="container mx-auto p-4">
            <Navbar />
            <ContactBanner />
            <div>
              <div className="pt-32">
                {" "}
                <SimpleForm />
              </div>
              <div></div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
