import { Box, Button, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { updateUserInfo } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "36px",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "10px",
}));
const ParaText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "14px",
  color: "white",
  letterSpacing: "1.2px",
}));

const Buttons = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  textTransform: "none",
}));

function FirstPage() {
  const [sleepEasily, setSleepEasily] = useState(false);
  const [sleepNight, setSleepNight] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const navigate = useNavigate();
  const { userId, setProgress } = useContext(UserContext);

  const submit = async () => {
    let data = {
      changes: [],
    };
    console.log(sleepEasily, sleepNight, refreshed);
    if (sleepEasily) {
      data.changes.push("I would go to sleep easily");
    }
    if (sleepNight) {
      data.changes.push("I would sleep through the night");
    }
    if (refreshed) {
      data.changes.push("I'd wake up on time, refreshed");
    }
    const response = await updateUserInfo(data, userId);
    if (response.status === "success") {
      navigate("/form/second-form");
    }
  };

  useEffect(() => {
    setProgress(50);
    if (!userId) {
      navigate("/login");
    }
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box>
        <MainText>
          Let's say in a few weeks, you're sleeping well. What would change?
        </MainText>
        <ParaText>Select all the changes you would like to see</ParaText>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Buttons
          variant="contained"
          onClick={() => {
            setSleepEasily((preValue) => !preValue);
          }}
          sx={{
            backgroundColor: "rgb(42,83,109)",
            "&:hover": {
              backgroundColor: "rgba(42,83,109,0.8)",
            },
          }}
          endIcon={
            sleepEasily && <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
          }
        >
          <ParaText>I would go to sleep easily</ParaText>
        </Buttons>
        <Buttons
          onClick={() => {
            setSleepNight((preValue) => !preValue);
          }}
          variant="contained"
          sx={{
            backgroundColor: "rgb(38,65,131)",
            "&:hover": {
              backgroundColor: "rgba(38,65,131,0.8)",
            },
          }}
          endIcon={
            sleepNight && <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
          }
        >
          <ParaText>I would sleep through the night</ParaText>
        </Buttons>
        <Buttons
          variant="contained"
          onClick={() => {
            setRefreshed((preValue) => !preValue);
          }}
          sx={{
            backgroundColor: "rgb(61,69,150)",
            "&:hover": {
              backgroundColor: "rgba(61,69,150,0.8)",
            },
          }}
          endIcon={
            refreshed && <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
          }
        >
          <ParaText>I'd wake up on time, refreshed</ParaText>
        </Buttons>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {(sleepEasily || sleepNight || refreshed) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(254,160,45)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => {
                if (sleepEasily || sleepNight || refreshed) {
                  submit();
                }
              }}
            >
              <ArrowDownwardIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FirstPage;
