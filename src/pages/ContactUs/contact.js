import React from "react";
import "./contact.css";
import Contact_Form from "./components/Contact_Form/con_form";

import Navbar from "../../common/components/navbar/navbar";
import Footer from "../../common/components/footer/footer";

const Contact = () => {
  return (
    <section>
        <Navbar />
      <div className="bg-white flex justify-center">
        <div className="contact_container flex flex-col items-center w-full ">
          <div className="contact_header_section w-full">
            <div className="contact_text  text-white flex flex-col items-center justify-center py-20">
              <span className="text-2xl font-semibold uppercase tracking-wide sm:text-xl">
                Contact Us
              </span>
              <p className="text-5xl w-3/12 text-center font-bold pt-1 sm:text-3xl sm:w-7/12">
                Get in Touch with Humbus Cloud
              </p>
            </div>
          </div>

          <div className="contact_form w-10/12 px-10 py-10 pb-0 ">
            <Contact_Form />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
