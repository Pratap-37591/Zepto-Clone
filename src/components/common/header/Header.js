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

 background-color:  #FF3269;
 border: none;
 outline: none;
 color: #fff;
 padding: 4px 9px; 
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

Modal.setAppElement("#root");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                <p>This is the content of the popup modal.</p>

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
          <Typography sx={{ marginLeft: "auto" }}>Login</Typography>
          <CartButton>
            <IconButton>
              <LocalMallIcon />{" "}
            </IconButton>
            <Typography sx={{ paddingInline: 2 }}>My Cart</Typography>
          </CartButton>
        </Toolbar>
      </CustomAppBar>
    </>
  );
};

export default Header;
