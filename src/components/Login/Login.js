import React from "react";
import Modal from "react-modal";
import { Grid } from "@mui/material";

const Login = ({ isLogin, handleLoginCloseModel }) => {
  return (
    <div>
      <Modal
        isOpen={isLogin}
        onRequestClose={handleLoginCloseModel}
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
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default Login;
