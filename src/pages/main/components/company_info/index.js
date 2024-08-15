import React from "react";
import "./index.css";

import Expertise from "../../assets/Expertise.png";
import Innovation from "../../assets/Innovation.png";
import ThinkingPartner from "../../assets/ThinkingPartner.png";

const company_Info = () => {
  return (
    <section className="bg-white flex justify-center">
      <div className="company_info_container w-10/12 px-10 py-20 sm:w-full sm:px-5">
        <div className="company_info_text flex flex-col items-center">
          <div className="company_info_text_1">
            <span className="uppercase font-semibold tracking-wider text-xl">
              Who we are
            </span>
          </div>
          <div className="company_info_text_2 pt-2  flex justify-center flex-col items-center ">
            <p className="text-5xl font-bold leading-[3rem] text-center sm:text-left sm:text-3xl">
              Humbus Cloud keeps the world’s most sophisticated investment
              managers one step ahead of the future with
            </p>
            <p className="text-5xl text-center sm:text-left font-bold  ci_text_2 leading-[4rem] flex sm:text-3xl  ">
              improved efficiency, insight and performance.
            </p>
          </div>
          <div className="company_info_text_3 pt-3 w-5/12 text-center sm:w-full sm:pt-4">
            {" "}
            <span className="text-xl text-gray-600 sm:text-lg">
              At Humbus Cloud, no technology, product, solution or service is
              ever static. We deliver transformation by design.
            </span>
          </div>
        </div>

        <div className="company_info_2 flex sm:flex-col  pt-20 justify-between">

          <div className="company_info_Expertise flex justify-center">
            <div className="company_info_img_1 pt-2">
              <img width={130} src={Expertise} alt="" />
            </div>
            <div className="company_info_expertise_text pl-5 ">
                <span className="text-2xl font-semibold">Industry Expertise</span>
                <p className="pt-2">Our knowledge of investment management is unparalleled. We sweat the details, understand the nuances, and move fast.</p>
            </div>
          </div>

          <div className="company_info_Innovation flex pl-10 sm:pl-0 sm:pt-5">
            <div className="company_info_img_1 ">
              <img width={130} src={Innovation} alt="" />
            </div>
            <div className="company_info_expertise_text pl-5">
                <span className="text-2xl font-semibold">Proven Innovation</span>
                <p className="pt-2">For over 20 years we’ve been pioneering practical, flexible solutions that benefit our clients with lower costs, keener insights and improved productivity.</p>
            </div>
          </div>

          <div className="company_info_thinkingPartner flex pl-10 sm:pl-0 sm:pt-5">
            <div className="company_info_img_1 pt-1">
              <img width={130} src={ThinkingPartner} alt="" />
            </div>
            <div className="company_info_expertise_text pl-5">
                <span className="text-2xl font-semibold">Thinking Partner</span>
                <p className="pt-2">Beyond our award-winning products, clients also turn to us for our ability to collaborate, solve problems and find new ways to advance their goals.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default company_Info;
