import { Typography, Box } from "@mui/material";
import React from "react";
import "../Categories/Categories.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Categories = () => {
   
    
  return (
    <div className="categories">
      <div className="explore-button">
        <Typography>Explore By Categories</Typography>
        <a href="/Categories" className="buttons" >
          <div>
            <span>See all</span>
            <NavigateNextIcon />
          </div>
        </a>
      </div>

      <Box className="image-container">
        <a href="#">
          <img
            className="large-image"
            src="https://cdn.zeptonow.com/production///tr:w-420,ar-664-452,pr-true,f-webp,q-80/inventory/category/fad86a63-828f-4381-b9e8-58b39d48ed41-Frame_11049_(1).png"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            className="large-image"
            src="https://cdn.zeptonow.com/production///tr:w-420,ar-692-471,pr-true,f-webp,q-80/inventory/category/80f85556-668a-4953-975d-c9b8c7147ddf-Atta,_Rice,_Oil_&_Dals-01.png"
            alt="fruits"
          />
        </a>

        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/dfbc7b23-ddd8-4c20-8b0c-4e8e3d5d2612-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/0bb572e4-7c2a-472c-9d26-2c19cb8897ba-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/844f1946-5dfd-415f-9d4a-83bef891af5b-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/4cfc43e9-78b8-419c-8d03-6d0adcfa8729-imageWithName"
            alt="fruits"
          />
        </a>
      </Box>
    </div>
  );
};

export default Categories;
