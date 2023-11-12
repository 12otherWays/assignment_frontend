import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";
import icon from "../../public/13.png";
import UserContext from "../../context/UserContext";

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "36px",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "10px",
}));

function LastPage() {
  const { setProgress } = useContext(UserContext);

  useEffect(() => {
    setProgress(100);
  });
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
        <MainText>Thank You</MainText>
      </Box>
    </Box>
  );
}

export default LastPage;
