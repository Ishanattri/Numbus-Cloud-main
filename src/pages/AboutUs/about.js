import React from "react";


import Main from "./components/first_page_about/index"
import Client from "./components/clients/client";
import Intro from "./components/Intro/intro";
import Team from "./components/team/team";

import Navbar from "../../common/components/navbar/navbar";
import Footer from "../../common/components/footer/footer";

const About  = () =>{
    return(
        <section className="bg-white">
            <Navbar />
            <div className="about_container ">
                <Main />
                <Intro />
                <Team />
                <Client />
               {/* <Intro />    
               <Team /> */}
            </div>
            <Footer />
        </section>

    )
}

export default About;

