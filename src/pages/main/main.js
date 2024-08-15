import React from "react";
import Portfolio from "./components/portfolio/folio";
import Partners from "./components/partners/partners";
import Industries from "./components/industries/industries";

import Video from "./components/video_com/video";
import Testo from "./components/testinomials/testo";
import Company from "./components/company_info";

import Navbar from "../../common/components/navbar/navbar";
import Footer from "../../common/components/footer/footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
         {/* <Video />
        <Industries />
        <Partners />
        <Testo /> */}
        <Video />
        <Company />
        <Industries />
        <Partners />
        <Testo />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
