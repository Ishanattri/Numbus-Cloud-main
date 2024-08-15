import React from "react";
import "./index.css"
import BGImage from "../../assets/backgrounds/Slide 16_9 - 3 (1).png"

const FPA = () =>{
    return(
        <section>
            <div className="FPA_container relative text-center">
                <div className="about_us_bg_img flex justify-end">
                    <img className="w-12/12" src={BGImage} alt="" />
                </div>
                <div className="FPA_text left-36 top-36 absolute flex flex-col items-start sm:left-5 sm:top-5">
                    <span className="text-8xl about_text_1 sm:text-5xl sm:font-semibold" >About Us</span>
                    <span className="text-2xl pt-2 w-6/12 text-left about_text_2 sm:text-xs sm:w-5/12 sm:pt-1">We are digital changemakers – here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed.</span>
                </div>
            </div>
        </section>
    )
}

export default FPA;