import { Typography, Box } from "@mui/material";
import React from "react";
import "../Categories/Categories.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoriesCarosule = [
  {
    id: 1,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/ec9d33cc-775c-4fd8-a817-fd2f0327f4f2-NC_Kneeds.png",
  },
  {
    id: 2,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/420e08b5-09a7-4143-b186-08226face17f-NC_Fit.png",
  },
  {
    id: 3,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/6c5cfd45-5e0d-444f-ab20-441e29b2001a-NC_Gift.png",
  },
  {
    id: 4,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/c91e8ffd-5521-4368-949b-5fef296130f6-NC_Pet.png",
  },
  {
    id: 5,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/394e60aa-460f-4679-aabc-69d9adb24134-NC_Beauty.png",
  },
  {
    id: 6,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/2757219c-cfdf-4a66-ad04-815621d9d29e-NC_meats.png",
  },
  {
    id: 7,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-100,ar-282-354,pr-true,f-webp,q-80/inventory/banner/9a357434-6a7f-465e-9b6b-bc41bf302a96-NC_Org.png",
  },
  {
    id: 7,
    coverImage:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4569615f-baf4-4eda-83bf-0745996f6771-NC_Party.png",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Categories = () => {
  return (
    <div className="categories">
      <div className="explore-button">
        <Typography>Explore By Categories</Typography>
        <a href="/Categories" className="buttons">
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
      <Box className="image-container2">
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/954dd3f4-2b40-4cba-9e8c-d7cf2da47ac0-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            className="large-image"
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/16913142-c1a3-49bd-bd15-9a68818dd3e8-imageWithName"
            alt="fruits"
          />
        </a>

        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/bb61d61d-8654-4029-a0de-592f14563c82-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/8a9eda1e-06cb-403e-8830-006991ec824f-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/7f7750aa-8539-44de-8630-df4ddad35df2-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/4cfc43e9-78b8-419c-8d03-6d0adcfa8729-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/4cfc43e9-78b8-419c-8d03-6d0adcfa8729-imageWithName"
            alt="fruits"
          />
        </a>
        <a href="#">
          <img
            src="https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/308c76dd-3b3d-4f16-9229-64cdc89752dc-imageWithName"
            alt="fruits"
          />
        </a>
      </Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          textIndent: "14rem",
          margin: "10px",
        }}
      >
        Explore New Categories
      </Typography>
      <Carousel responsive={responsive} className="CategoriesCarosule">
        {CategoriesCarosule.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.coverImage} alt={item.id} style={{ width: 160 }} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Categories;
