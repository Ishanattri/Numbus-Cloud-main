import React from "react";

import Icon from "../../assets/IVP_consume-more-varied-data.svg";

const Form = () => {
  return (
    <section className="bg-gray-100 rounded-lg px-10 sm:px-0 sm:bg-white">
      <div className="contact_container flex py-20 sm:flex-col sm:pb-0 sm:pt-5">
        <div className="form_text flex flex-col items-start">
          <div>
            <img src={Icon} width={50} alt="" />
          </div>
          <div className="text_some pt-4">
            <p className="text-4xl font-bold w-8/12 text-left sm:w-full"><span className="bg-blue-100"> Let’s talk </span> about your business requirements</p>
          </div>
        </div>

        <div className="form_inputs sm:pt-10">
          <div className="person_name flex sm:flex-col">
            <div className="first_name">
              <input type="text" placeholder="First Name" className="text-xl bg-white px-10 rounded-lg py-2 text-black mr-14 sm:border-gray-500 sm:border-2 sm:w-full"  />
            </div>
            <div className="last_name">
              {" "}
              <input type="text" placeholder="Last Name" className="text-xl bg-white px-10 rounded-lg py-2 text-black sm:border-gray-500 sm:border-2 sm:w-full sm:mt-3" />
            </div>
          </div>
          <div className="email_address pt-4">
            {" "}
            <input
              type="email"
              name=""
              id=""
              placeholder="Business Email Id"
              className="text-xl bg-white px-10 rounded-lg py-2 text-black w-full sm:border-gray-500 sm:border-2 sm:w-full sm:mt-0"
            />{" "}
          </div>
          <div className="person_info pt-4 flex sm:flex-col">
            <div className="title">
              {" "}
              <input type="text" placeholder="Title" className="text-xl bg-white px-10 rounded-lg py-2 text-black mr-14 sm:border-gray-500 sm:border-2 sm:w-full sm:mt-0" />{" "}
            </div>
            <div className="organisation">
              {" "}
              <input type="text" className="text-xl bg-white px-10 rounded-lg py-2 text-black sm:border-gray-500 sm:border-2 sm:w-full sm:mt-3" placeholder="Organisation" />{" "}
            </div>
          </div>
          <div className="pt-4 flex sm:flex-col">
            <div className="phone_no">
              {" "}
              <input type="text" placeholder="Phone no. (Optional)" className="text-xl bg-white px-10 rounded-lg py-2 text-black mr-14 sm:border-gray-500 sm:border-2 sm:w-full sm:mt-0" />{" "}
            </div>
            <div className="type_query">
              <select aria-placeholder="Query" className="text-xl bg-whites px-10 rounded-lg py-2 text-black sm:border-gray-500 sm:border-2 sm:w-full sm:mt-3 w-full" value="Hello" name="" id="">
                <option value="Helllo" >Query</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="reason pt-4 flex">
            <input type="text" placeholder="Reason (Optional)" className="text-xl bg-white px-10 rounded-lg py-2 text-black w-full sm:border-gray-500 sm:border-2 sm:w-full sm:mt-0" />
          </div>
          <div className="btn flex pt-4 justify-end">
            <button className="bg-blue1 text-white text-xl px-8 py-1 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
