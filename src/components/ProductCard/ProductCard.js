import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import React from "react";
import ProductCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../common/carosule/Carosule.css";
import StyledComponent from "styled-components";
import { MdDiscount } from "react-icons/md";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Button = StyledComponent.button`
  border: 1px solid crimson;
  color: crimson;
  background: white;
  padding: 5px 20px;
  border-radius: 5px;
`;

const ProductCardDetails = [
  {
    id: 1,
    productImage: require("../../assets/Avocado.jpg"),
    productHeader: "Avocado Has",
    productQuality: "1 pcs (160g - 180g)",
    productStrikeoutPrice: "₹111",
    productPrice: "₹89",
    // productdiscountSVg: '',
    productdiscountPrice: "14% off",
    productAdd: "Add",
  },
  {
    id: 2,
    productImage: require("../../assets/Jumun.jpg"),
    productHeader: "Jumun",
    productQuality: "250 g",
    productStrikeoutPrice: "₹110",
    productPrice: "₹93",
    // productdiscountSVg: '',
    productdiscountPrice: "16% off",
    productAdd: "Add",
  },
  {
    id: 3,
    productImage: require("../../assets/Mango.jpg"),
    productHeader: "Mango",
    productQuality: "1 kg (Approx.3pcs..",
    productStrikeoutPrice: "₹104",
    productPrice: "₹88",
    // productdiscountSVg:'',
    productdiscountPrice: "20% off",
    productAdd: "Add",
  },
  {
    id: 4,
    productImage: require("../../assets/Orange.jpg"),
    productHeader: "Orange",
    productQuality: "2 pcs (Approx. 350..",
    productStrikeoutPrice: "₹65",
    productPrice: "₹55",
    // productdiscountSVg: require("../../assets/discount.png"),
    productdiscountPrice: "10% off",
    productAdd: "Add",
  },
  {
    id: 5,
    productImage: require("../../assets/Mushroom.jpg"),
    productHeader: "Mushroom",
    productQuality: "1 pack (Approx.18..",
    productStrikeoutPrice: "₹67",
    productPrice: "₹56",
    // productdiscountSVg: require("../../assets/discount.png"),
    productdiscountPrice: "6% off",
    productAdd: "Add",
  },
  {
    id: 6,
    productImage: require("../../assets/OrangeBaby.jpg"),
    productHeader: "OrangeBaby",
    productQuality: "500 g",
    productStrikeoutPrice: "₹268",
    productPrice: "₹228",
    // productdiscountSVg: require("../../assets/discount.png"),
    productdiscountPrice: "12% off",
    productAdd: "Add",
  },
  {
    id: 7,
    productImage: require("../../assets/Apple.jpg"),
    productHeader: "Apple",
    productQuality: "4 pcs (500 -600g)",
    productStrikeoutPrice: "₹209",
    productPrice: "₹178",
    // productdiscountSVg: require("../../assets/discount.png"),
    productdiscountPrice: "5% off",
    productAdd: "Add",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ProductCard = () => {
  return (
    <>
      <div className="explore-button">
        <Typography>Explore By Categories</Typography>
        <a href="/Categories" className="buttons">
          <div>
            <span>See all</span>
            <NavigateNextIcon />
          </div>
        </a>
      </div>
      <div style={{ width: "70%", margin: "auto" }}>
        <ProductCarousel responsive={responsive}>
          {ProductCardDetails.map((item, index) => {
            return (
              <Box key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    maxWidth: "180px",
                    height: "250px",
                    borderRadius: "9px",

                    boxShadow: "0px 3px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 60,
                        color: "crimson",
                        fontSize: "20px",
                      }}
                    >
                      <MdDiscount />
                    </div>
                    <Typography
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 90,
                        color: "red",
                      }}
                    >
                      {item.productdiscountPrice}
                    </Typography>
                    <CardMedia
                      component="img"
                      height={100}
                      width={60}
                      style={{ objectFit: "contain" }}
                      image={item.productImage}
                      alt="productimage"
                    />
                    <Typography gutterBottom variant="h5">
                      {item.productHeader}
                    </Typography>
                    <Typography>{item.productQuality}</Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Typography>{item.productStrikeoutPrice}</Typography>
                      <Typography>{item.productPrice}</Typography>
                    </div>
                    <CardActions>
                      <Button>{item.productAdd}</Button>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </ProductCarousel>
      </div>
    </>
  );
};

export default ProductCard;
