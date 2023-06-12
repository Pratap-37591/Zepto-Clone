import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
} from "@mui/material";
import styledComponents from "styled-components";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Modal from "react-modal";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import { Search as SearchIcon } from "@mui/icons-material";
import "../header/Header.css";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Login from "../../Login/Login";

const SearchBarContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 45px;
  width: 50%;
  outline: none;
  border: 0;
  &:focus {
    outline: none;
    border: 0;
  }
  position: "relative";
`;

const CartButton = styledComponents.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff3269;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 7px;
  font-size: 16px;
  margin-left: 30px;
`;

const StyledInput = styled(InputBase)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  outline: "none",
  border: "none",
  paddingLeft: theme.spacing(6),
}));

const CustomAppBar = styled(AppBar)`
  background-color: #3c006b;
  width: 100%;
`;

const Image = styledComponents.img`
width: 100px;
height: 66px;
margin-left: 40px;

`;

const Line = styledComponents.span`
line-height: 2rem;
boder: 0px solid #fff;
margin-left: 1.5rem;
margin-right: 1.5rem;
height: 1.3rem;
width: 1.8px;
opacity: 0.5;
background-Color: #ffffff;
`;

const PopUpSearch = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border-radius: 10px;
  height: 45px;
  width: 98%;
  outline: none;
  border: 0;
  &:focus {
    outline: none;
    border: 0;
  }
  position: "relative";
  margin: 15px 5px;
`;

const PopSearchInput = styled(InputBase)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "14px",
  paddingLeft: theme.spacing(6),
}));

const EnableButton = styledComponents.button`
  color:  #FF3269;
  background: #fff;
  border: 1px solid rgba(34,34,34,0.2);
  letter-spacing: .1em;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
`;

const LoginButton = styledComponents.a`
   cursor: pointer;
   margin-left: auto;
`;
Modal.setAppElement("#root");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    if (!isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const handleLoginCloseModel = () => {
    setIsLogin(false);
  };
  const handleButtonClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <CustomAppBar>
        <Toolbar>
          <Image src={require("../../../assets/logo.jpg")} alt="logo" />
          <Line></Line>
          <Button
            onClick={handleButtonClick}
            sx={{
              display: "flex",
              gap: 1,
              fontSize: "1rem",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Location..
            <div>
              <i
                style={{ fontSize: "0.8rem" }}
                className="fa-solid fa-chevron-down"
              ></i>
            </div>
            {isOpen && (
              <Modal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Popup Modal"
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                  content: {
                    width: "500px",
                    height: "350px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    margin: "auto",
                  },
                }}
              >
                <Box
                  sx={{
                    boxShadow: "0px 5px rgba(0,0,0,0.1)",
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      textAlign: "center",
                      lineHeight: 2,
                    }}
                  >
                    Your Location
                  </Typography>
                </Box>
                <PopUpSearch>
                  <PopSearchInput
                    variant="outlined"
                    placeholder="Search a new address"
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <IconButton sx={{ position: "absolute", left: "2rem" }}>
                    <SearchIcon />
                  </IconButton>
                </PopUpSearch>
                <div className="location-content">
                  <IconButton sx={{ color: "#FF3269" }}>
                    <GpsFixedIcon />
                  </IconButton>
                  <section>
                    <p>current location</p>
                    <p>Enable your current location for better services</p>
                  </section>
                  <EnableButton
                    onClick={() =>
                      alert(
                        "Turn on Location Services to Allow Zepto to Determine Your Location by Clicking the Location icon in the Address bar, and then Always allow."
                      )
                    }
                  >
                    Enable
                  </EnableButton>
                </div>
                <IconButton
                  onClick={handleCloseModal}
                  sx={{ position: "absolute", right: "1px", top: "3px" }}
                >
                  <CancelIcon sx={{ fontSize: "15px" }} />
                </IconButton>
              </Modal>
            )}
          </Button>
          <SearchBarContainer>
            <StyledInput
              variant="outlined"
              placeholder="Search for over 5000 products Login  My Cart"
              onChange={(e) => handleChange(e.target.value)}
            />
            <IconButton sx={{ position: "absolute", left: "21rem" }}>
              <SearchIcon />
            </IconButton>
          </SearchBarContainer>
          <LoginButton onClick={handleLoginClick}>
            {isLogin && (
              <Login
                isLogin={isLogin}
                handleLoginCloseModel={handleLoginCloseModel}
              />
            )}
            <Typography>Login</Typography>
          </LoginButton>
          <CartButton>
            <LocalMallIcon />

            <Typography sx={{ paddingInline: 2 }}>My Cart</Typography>
          </CartButton>
        </Toolbar>
      </CustomAppBar>
    </>
  );
};

export default Header;
