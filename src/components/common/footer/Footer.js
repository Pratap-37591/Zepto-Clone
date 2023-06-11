import React from "react";
import "../footer/footer.css";
import { Box, Link, List, ListItem, Typography, styled } from "@mui/material";
import styledComponents from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterBoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListBoxContainer = styledComponents.div`
display: flex;
gap: 8rem;
`;

const Bottomfooter = styledComponents.div`
    display:flex;
    justify-content: center;
    gap: 5rem;
  
`;

const googlepay = require("../../../assets/google-play.png");
const applelogo = require("../../../assets/apple-logo.png");

const Footer = () => {
  return (
    <div>
      <div className="divider"></div>
      <Typography
        variant="h3"
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          fontWeight: 700,
          textIndent: "17.5rem",
          letterSpacing: ".05rem",
        }}
      >
        Categories
      </Typography>
      <FooterBoxContainer>
        <ListBoxContainer className="list">
          <List component="ul">
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Fruits & Vegetables</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Atta, Rice, Oil & Dals</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Masala & Dry Fruits</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Sweet Cravings</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Frozen Food & Ice Creams</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Homegrown Brands</ListItem>
            </Link>
          </List>
          <List>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Baby Food</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Dairy, Bread & Eggs</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Cold Drinks & Juices</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Meats, Fish & Eggs</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Breakfast & Sauces</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Paan Corner</ListItem>
            </Link>
          </List>
          <List>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Tea, Coffee & More</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Biscuits</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Makeup & Beauty</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Bath & Body</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Cleaning Essentials</ListItem>
            </Link>
          </List>
          <List>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Home Needs</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Electricals & Accessories</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Hygiene & Grooming</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Health & Baby Care</ListItem>
            </Link>
          </List>
        </ListBoxContainer>
      </FooterBoxContainer>
      <div className="divider1"></div>
      <Bottomfooter>
        <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }} >
          <img
            src="https://cdn.zeptonow.com/mweb-prod/images/logo.svg"
            alt="zepto"
            style={{ width: "105px", height: "35px" }}
          />
          <Box className="Socialicon-container">
            <Link href="#">
              <FacebookIcon sx={{ fontSize: "28px" }} />
            </Link>
            <Link href="#">
              <InstagramIcon sx={{ fontSize: "28px" }} />
            </Link>
            <Link href="#">
              <LinkedInIcon sx={{ fontSize: "28px" }} />
            </Link>
            <Link href="#">
              <TwitterIcon sx={{ fontSize: "28px" }} />
            </Link>
          </Box>
          <Box>
            <Typography sx={{ color: "grey", textTransform: "capitalize" }}>
              ©️ pratap technologies private limited
            </Typography>
          </Box>
        </Box>
        <Box className="footerlinks">
          <List>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Home</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Delivery Areas</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Careers</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Customer Support</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Press</ListItem>
            </Link>
          </List>
          <List>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Privacy Policy</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Terms of Use</ListItem>
            </Link>
            <Link href="#" style={{ width: "50%" }}>
              <ListItem components="li">Responsible Disclosure Policy</ListItem>
            </Link>
          </List>
        </Box>
        <Box>
          <Typography sx={{ marginTop: 2, marginBottom: 1 }}>
            Download App
          </Typography>
          <div className="download_app">
            <Link>
              <img
                src={googlepay}
                alt="googlepaystore"
                width={20}
                height={20}
              />
              <Typography>Get it on play store</Typography>
            </Link>
            <Link>
              <img
                src={applelogo}
                alt="googlepaystore"
                width={20}
                height={20}
              />
              <Typography>Get it on app store</Typography>
            </Link>
          </div>
        </Box>
      </Bottomfooter>
    </div>
  );
};

export default Footer;
