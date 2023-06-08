import React from "react";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer.js";
import Work from "../../components/common/howitworks/Work.js";
import { Typography } from "@mui/material";
import "../Home/Home.css";
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
      <Work />
      <Footer />
    </>
  );
};

export default HomePage;
