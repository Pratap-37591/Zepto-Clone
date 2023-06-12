import React from "react";

import Footer from "../../components/common/footer/Footer.js";
// import Work from "../../components/common/howitworks/Work.js";
import { Typography } from "@mui/material";
import "../Home/Home.css";
import Header from "../../components/common/header/Header.js";
// import Carosule from "../../components/common/carosule/Carosule.js";
import Banner from "./Banner.js";
import Carosule1 from "../../components/common/carosule/Carosule1.js";
import Work from "../../components/common/howitworks/Work.js";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="sub-header">
        <img src={require("../../assets/free.png")} alt="" />
        <Typography>
          Deliver in <br /> 10 mins
        </Typography>
        <img src={require("../../assets/free1.png")} alt="" />
      </div>
      {/* <Carosule/> */}
      <div style={{ width: "90%", margin: "30px auto" }}>
        <Carosule1 />
      </div>
      <Banner />
      <Work />
      <Footer />
    </>
  );
};

export default HomePage;
