import { Box, Button, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { updateUserInfo } from "../../utils/api";

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

function SecondPage() {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();
  const { userId, setProgress } = useContext(UserContext);

  const submit = async () => {
    let data = {
      strugglingTime: value,
    };
    console.log(userId);
    const response = await updateUserInfo(data, userId);
    if (response.status === "success") {
      navigate("/form/last");
    }
  };

  useEffect(() => {
    setProgress(75);
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
          That's a great goal. How long have been struggling with your sleep?
        </MainText>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Buttons
          onClick={() => {
            setValue("less than 2 weeks");
          }}
          variant="contained"
          sx={{
            backgroundColor: "rgb(42,83,109)",
            "&:hover": {
              backgroundColor: "rgba(42,83,109,0.8)",
            },
          }}
          endIcon={
            value === "less than 2 weeks" && (
              <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
            )
          }
        >
          <ParaText>Less than 2 weeks</ParaText>
        </Buttons>
        <Buttons
          onClick={() => {
            setValue("2 to 8 weeks");
          }}
          variant="contained"
          sx={{
            backgroundColor: "rgb(38,65,131)",
            "&:hover": {
              backgroundColor: "rgba(38,65,131,0.8)",
            },
          }}
          endIcon={
            value === "2 to 8 weeks" && (
              <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
            )
          }
        >
          <ParaText>2 to 8 weeks</ParaText>
        </Buttons>
        <Buttons
          onClick={() => {
            setValue("more than 8 weeks");
          }}
          variant="contained"
          sx={{
            backgroundColor: "rgb(61,69,150)",
            "&:hover": {
              backgroundColor: "rgba(61,69,150,0.8)",
            },
          }}
          endIcon={
            value === "more than 8 weeks" && (
              <CheckCircleRoundedIcon style={{ fontSize: 26 }} />
            )
          }
        >
          <ParaText>More than 8 weeks</ParaText>
        </Buttons>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {value && (
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
            <ArrowDownwardIcon
              onClick={() => {
                if (value) {
                  submit();
                }
              }}
              sx={{ color: "white" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SecondPage;
