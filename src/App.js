import React from "react";
import Footer from "../src/common/components/footer/footer"
import Navbar from "../src/common/components/navbar/navbar"
import Contact from "../src/pages/ContactUs/contact"
import About from "./pages/AboutUs/about";
import Main from "./pages/main/main";

const App = () =>{
    return(
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default App;