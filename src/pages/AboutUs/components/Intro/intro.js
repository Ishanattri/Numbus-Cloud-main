import React from "react"
import "./intro.css"

const Intro = () =>{
    return(
        <section className="flex justify-center ">
            <div className="intro_container w-10/12 px-10 py-20 sm:px-5 sm:w-full">
                <div className="company_intro flex pb-10 justify-evenly items-center sm:flex-col sm:items-start sm:justify-start">
                    <div className="intro_text_1 sm:pb-5">
                        <span className="text-5xl font-bold sm:text-4xl ">We are Humbus Cloud</span>
                    </div>
                    <div className="intro_text_2 text-left pl-10 sm:pl-0">
                        <p className="text-xl">Humbus Cloud is a global consulting service and systems integrator that operates in over 90+ countries, delivering solutions with a unique blend of digital innovation and robust, industry-strong processes. With our promise to help our customers “scale at speed,"</p>
                    </div>
                    <div className="intro_text_3 text-left pl-10 sm:pl-0 sm:pt-2">
                        <p className="text-xl">design future state solutions for industry leaders and offer innovative digital experiences that enable them to transform and scale at speed. Our aim is to enable enterprises, associates, and society to Rise for a more equal world, future readiness, and value creation.</p>
                    </div>

                </div>

                <div className="company_numbers flex justify-evenly sm:grid sm:grid-cols-2 sm:gap-10">
                    {/* <div className="w-1/12 sm:w-0"></div> */}
                    <div className="company_number_1 flex flex-col items-center ">
                        <span className="text-8xl pl-28 sm:text-8xl sm:pl-0">6.20 </span>
                        <span className="text-gray-600 text-xl pt-1">USD Total Revenue</span>
                    </div>
                    <div className="company_number_2 flex flex-col items-center">
                        <span className="text-8xl ">147</span>
                        <span className="text-gray-600 text-xl pt-1">Associates</span>
                    </div>
                    <div className="company_number_3 flex flex-col items-center">
                        <span className="text-8xl ">1100</span>
                        <span className="text-gray-600 text-xl pt-1">Global Customers</span>
                    </div>
                    <div className="company_number_4 flex flex-col items-center w-2/12 sm:w-full">
                        <span className="text-8xl ">90</span>
                        <span className="text-gray-600 text-xl pt-1 pl-2 ">Countries Where We Drive our Technology</span>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Intro;

{/* <sup className="top-[-4rem] left-[-1rem] text-xl font-semibold text-red-600 sm:top-0 sm:left-0">+ Billion</sup> */}