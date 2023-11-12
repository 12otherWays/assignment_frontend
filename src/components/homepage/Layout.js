import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

const OutterDiv = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MobilDiv = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  padding: "40px 15px",
  backgroundColor: "rgb(10,9,27)",
  width: "360px",
  height: "700px",
  borderRadius: "20px",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "36px",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "10px",
}));
const ParaText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "12px",
  color: "white",
  textAlign: "center",
}));

function Layout() {
  const location = useLocation();

  return (
    <OutterDiv>
      <MobilDiv>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <MainText>
            {location.pathname === "/" && "Hey! I'm"}{" "}
            {location.pathname === "/response" && "Hey! I'm"}{" "}
            {location.pathname === "/signup" && "Sign up to"}{" "}
            {location.pathname === "/login" && "Log in to "}{" "}
            <span style={{ color: "#54A1A7" }}>Wysa</span>
          </MainText>
          <Outlet />
          <ParaText>
            By continuing, I confirm I am 13 or older and accept the{" "}
            <span style={{ color: "#54A1A7", textDecoration: "underline" }}>
              Terms of Service
            </span>{" "}
            and{" "}
            <span style={{ color: "#54A1A7", textDecoration: "underline" }}>
              Privacy policy
            </span>
          </ParaText>
        </Box>
      </MobilDiv>
    </OutterDiv>
  );
}

export default Layout;
