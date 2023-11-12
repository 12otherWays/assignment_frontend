import { Box, LinearProgress, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";

const OutterDiv = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MobilDiv = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  padding: "30px 0px",
  backgroundColor: "rgb(10,9,27)",
  width: "360px",
  height: "700px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

function FormLayout() {
  const location = useLocation();
  const { progress } = useContext(UserContext);

  return (
    <OutterDiv>
      <MobilDiv>
        {location.pathname !== "/form" && (
          <LinearProgress
            sx={{
              backgroundColor: "rgb(44,58,86)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "rgb(81,168,211)",
              },
            }}
            variant="determinate"
            value={progress}
          />
        )}

        <Box sx={{ padding: "0 20px", height: "100%" }}>
          <Outlet />
        </Box>
      </MobilDiv>
    </OutterDiv>
  );
}

export default FormLayout;
