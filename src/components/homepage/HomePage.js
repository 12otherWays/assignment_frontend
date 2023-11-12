import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../public/13.png";

const ParaText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "12px",
  color: "white",
  textAlign: "center",
}));
const Buttons = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  textTransform: "none",
  margin: 0,
}));

function HomePage() {

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <img
        src={icon}
        alt="wysa doodle"
        style={{
          height: "160px",
          width: "160px",
          margin: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: 0,
          width: "100%",
        }}
      >
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <Buttons
            variant="contained"
            sx={{
              backgroundColor: "rgb(42,83,109)",
              "&:hover": {
                backgroundColor: "rgba(42,83,109,0.8)",
              },
            }}
          >
            <ParaText>Log In</ParaText>
          </Buttons>
        </Link>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          <Buttons
            variant="contained"
            sx={{
              backgroundColor: "rgb(38,65,131)",
              "&:hover": {
                backgroundColor: "rgba(38,65,131,0.8)",
              },
            }}
          >
            <ParaText>Sign Up</ParaText>
          </Buttons>
        </Link>
      </Box>
    </Box>
  );
}

export default HomePage;
