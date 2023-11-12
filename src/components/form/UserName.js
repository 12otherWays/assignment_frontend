import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import icon from "../../public/35.png";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../../utils/api";

const ParaText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "18px",
  color: "white",
  letterSpacing: "1.2px",
  display: "flex",
  width: "80%",
  textAlign: "center",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "36px",
  color: "white",
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "10px",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "12px",
  color: "white",
  textAlign: "center",
}));

function UserName() {
  const [value, setvalue] = useState("");
  const { userId, setProgress } = useContext(UserContext);
  const navigate = useNavigate();

  const submit = async () => {
    let data = {
      nickname: value,
    };
    const response = await updateUserInfo(data, userId);
    if (response.status === "success") {
      navigate("/form/first-form");
    }
  };

  useEffect(() => {
    setProgress(25);
    if (!userId) {
      navigate("/login");
    }
  });

  return (
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
        Hey! I'm <span style={{ color: "#54A1A7" }}>wysa</span>
      </MainText>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ParaText>
          Out conversations are private & anonymous,so there is no login. Just
          choose a nickname and we're good to go.
        </ParaText>
        <form
          style={{
            position: "relative",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={icon}
            alt="wysa doodle"
            style={{
              height: "80px",
              width: "80px",
              margin: 0,
              position: "absolute",
              top: "-70px",
              left: "20px",
            }}
          />
          <TextField
            id="outlined-size-small"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            placeholder="Choose a nickname..."
            hiddenLabel
            sx={{
              backgroundColor: "white",
              borderRadius: "30px",
              width: "100%",
              color: "#54A1A7",
              marginBottom: "80px",
            }}
            InputLabelProps={{
              sx: {
                color: "#54A1A7",
                textTransform: "capitalize",
              },
            }}
            InputProps={{
              sx: {
                "& fieldset": {},
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "none",
                  color: "#54A1A7",
                },
              },
              endAdornment: (
                <InputAdornment position="end">
                  {value && (
                    <IconButton
                      onClick={() => {
                        submit();
                      }}
                      aria-label="delete"
                      size="large"
                      type="button"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgb(254,160,45)",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        transition: "all 200ms ease-in-out",
                        "&:hover": {
                          backgroundColor: "rgb(254,160,45)",
                          transform: "scale(1.08)",
                        },
                      }}
                    >
                      <ArrowDownwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            inputProps={{
              sx: {
                color: "#54A1A7",
                fontSize: "18px",
              },
            }}
          />
        </form>
      </Box>
      <Text>
        By continuing, I confirm I am 13 or older and accept the{" "}
        <span style={{ color: "#54A1A7", textDecoration: "underline" }}>
          Terms of Service
        </span>{" "}
        and{" "}
        <span style={{ color: "#54A1A7", textDecoration: "underline" }}>
          Privacy policy
        </span>
      </Text>
    </Box>
  );
}

export default UserName;
