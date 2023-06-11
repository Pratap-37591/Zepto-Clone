import { Typography, Box } from "@mui/material";
import React from "react";
import "../howitworks/work.css";
const Work = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2 }}>
        How it works
      </Typography>
      <Box className="work_container">
        <Box className="card-container">
          <img
            src="https://cdn.zeptonow.com/mweb-prod/images/pdp/place-order.svg"
            alt="phone"
          />
          <Box>
            <p>Place an order</p>
            <p>Choose from a wide range of daily essentials</p>
          </Box>
        </Box>
        <Box className="card-container">
          <img
            src="https://cdn.zeptonow.com/mweb-prod/images/pdp/do-not-blink.svg"
            alt="blink"
          />
          <Box>
            <p>Don't Blink</p>
            <p>Our delivery parter will be at your door</p>
          </Box>
        </Box>
        <Box className="card-container">
          <img
            src="https://cdn.zeptonow.com/mweb-prod/images/pdp/enjoy.svg"
            alt="enjoy"
          />
          <Box>
            <p>Enjoy</p>
            <p>Boom! You'll never have to wait for groceries again</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Work;
