import React from "react";

const Banner = () => {
  const banner1 = require("../../assets/paan-corner-banne.jpg");
  const banner2 = require("../../assets/Premium-Promo.jpg");

  return (
    <div className="banner">
      <img className="image1" src={banner1} alt="banner1" />
      <img className="image2" src={banner2} alt="banner2" />
    </div>
  );
};

export default Banner;
