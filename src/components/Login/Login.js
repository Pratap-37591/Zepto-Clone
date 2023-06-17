import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../Login/Login.css";
import { Typography } from "@mui/material";
// import Button from "./Button";

const Login = ({ isLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoginValidation, setIsLoginValidation] = useState(false);

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [phoneNumber]);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handlePhoneNumber = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputNumber);
  };

  const handleContinue = () => {
    setIsLoginValidation(true);
  };

  const closeModal = () =>{
    setIsLoginValidation(false);
  }

  return (
    <Modal
      className="modal-container"
      isOpen={isLogin}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      <div className="login-left-part">
        <div className="subleftpart">
          <img
            src="https://cdn.zeptonow.com/mweb-prod/tr:w-100,ar-0.2-0.2,pr-true,f-webp,q-80//images/logo.svg"
            alt="zepto"
          />
          {!isLoginValidation ? (
            <>
              <p>Groceries delivered in 10 minutes</p>
              <div className="input-container">
                <span>
                  <span>+91</span>
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  onClick={handleInputClick}
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isDisabled}
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
              <p>By Continuing you agree to our</p>
              <p className="privacy">
                Terms of Service <span>&</span> privacy Policy
              </p>
            </>
          ) : null}
        </div>
      </div>
      {isLoginValidation && (
        <div className="otp-container">
          <h1>OTP Page</h1>
        </div>
      )}
      <div className="login-right-part">
        <div className="subrightpart">
          <Typography>Order faster & easier every time</Typography>
          <Typography>With the Zepto App</Typography>
          <div className="social-icons">
            <a href="https://play.google.com/store/apps/details?id=com.zeptoconsumerapp">
              <img
                src="https://www.zeptonow.com/images/app-stores/download-play-store.svg"
                alt="googleplaystore"
              />
            </a>
            <a href="https://apps.apple.com/in/app/zepto-grocery-delivery/id1575323645">
              <img
                src="https://www.zeptonow.com/images/app-stores/download-app-store.svg"
                alt="applestore"
              />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
