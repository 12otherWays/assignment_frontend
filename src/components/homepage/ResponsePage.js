import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import icon from "../../public/13.png";
// import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "36px",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "10px",
}));

function ResponsePage() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/login");
  }

  useEffect(() => {
    setTimeout(redirect, 3000);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "60%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
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
        <MainText>New User Created</MainText>
      </Box>
    </Box>
  );
}

export default ResponsePage;
