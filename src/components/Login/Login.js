import React from "react";
import Modal from "react-modal";
import "../Login/Login.css";
const Login = ({ isLogin, handleLoginCloseModel }) => {
  return (
    <Modal
      isOpen={isLogin}
      onRequestClose={handleLoginCloseModel}
      contentLabel="Popup Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        
        },
        content: {
          width: "700px",
          height: "550px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          margin: "auto",
        },
      }}
    >
      <div className="login-left-part">
        <img
          src="https://cdn.zeptonow.com/mweb-prod/tr:w-0.2,ar-0.2-0.2,pr-true,f-webp,q-80//images/logo.svg"
          alt="zepto"
        />
        <p>Groceries delivered in 10 minutes</p>
        <input type="text" name="number" />
        <div>
          <button>Continue</button>
        </div>
        <p>By Continuing you agreento our</p>
        <p>
          Terms of Service <span>&</span> privacy Policy
        </p>
      </div>
      <div className="login-right-part"></div>
    </Modal>
  );
};

export default Login;
