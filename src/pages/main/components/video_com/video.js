import React from "react";

import Vid from "../../assets/bg.mp4"
const Video = () => {
    return (
        <div className="">
            <div className="video relative ">
                <video autoPlay loop muted playsInline className="relative z-0 " src={Vid} />
                <div className="video_text absolute left-0 right-0 top-64 z-10 flex flex-col sm:top-5 text-center">
                    <span className="text-7xl text-white font-semibold font-[Raleway] sm:text-3xl ">HUMBUS CLOUD</span>
                    <span className="text-white text-2xl pt-5 w-12/12 px-64  text-center sm:text-sm sm:px-5 sm:pt-3">For over two decades, Indus Valley Partners has been driving Finance Forward™ with best-of-breed technology solutions that enable our clients to evolve, transform and grow.</span>
                    <div className="btn_learn z-10 text-black pt-10  sm:pt-2">
                        <button className="py-3 px-10 bg-white rounded-lg text-xl hover:bg-blue3 sm:px-4 sm:text-sm sm:py-2">Learn More</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Video;