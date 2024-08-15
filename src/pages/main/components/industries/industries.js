import React from "react";

import Indus from "../../assets/indus.png"

const Industries  = () =>{
    return(
        <section className="bg-blue1 flex justify-center pt-10">
        <div className="indus_container flex w-10/12 flex-col text-white  items-center justify-center px-20  py-10 sm:px-5 sm:flex-col sm:w-full">
            <div className="heading-1 flex flex-col items-start justify-center ">
                <span  className="text-6xl font-bold   pb-3 sm:text-3xl uppercase ">Clients & Industries</span>
                <span className="text-xl font-[Inter] text-left sm:text-sm ">Whether as a website development agency or app development agency, Humbus Cloud has played an integral part in shaping the web presence of some elite brands. We’ve had the pleasure of growing brands in:</span>
            </div>
            <img src={Indus} className="w-12/12 sm:w-full sm:pt-4" alt="" />
        </div>
        </section>
    )
}


export default Industries;