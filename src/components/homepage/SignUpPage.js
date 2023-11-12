import { Box, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { signUpAPI } from "../../utils/api";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const ParaText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "14px",
  fontWeight: "600",
  color: "white",
  letterSpacing: "1.2px",
  textAlign: "start",
  display: "flex",
  width: "100%",
  padding: "30px 0 10px",
}));

function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    let data = {
      username: userName,
      password: password,
    };
    const response = await signUpAPI(data);
    if (response.status !== "success") {
      setSuccess(true);
    }
    setUserName("");
    setPassword("");
    if (response.status === "success") {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <ParaText>User name</ParaText>
          <TextField
            required
            id="outlined-size-small"
            // onFocus={() => handleFocus()}
            // onBlur={() => handleFocusOut()}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="User name"
            hiddenLabel
            sx={{
              // height: "60px",
              backgroundColor: "white",
              borderRadius: "4px",
              width: "100%",
              color: "#54A1A7",
            }}
            InputLabelProps={{
              sx: {
                color: "#54A1A7",
                textTransform: "capitalize",
              },
            }}
            InputProps={{
              sx: {
                "& fieldset": {
                  // borderRadius: 0,
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "1px solid white!important",
                  color: "#54A1A7",
                  // borderRadius: 0,
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#54A1A7",
                fontSize: "18px",
              },
            }}
          />
          <ParaText>Password</ParaText>
          <TextField
            required
            id="outlined-size-small"
            // onFocus={() => handleFocus()}
            // onBlur={() => handleFocusOut()}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            hiddenLabel
            sx={{
              // height: "60px",
              backgroundColor: "white",
              borderRadius: "4px",
              width: "100%",
              color: "#54A1A7",
            }}
            InputLabelProps={{
              sx: {
                color: "#54A1A7",
                textTransform: "capitalize",
              },
            }}
            InputProps={{
              sx: {
                "& fieldset": {
                  // borderRadius: 0,
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "1px solid white!important",
                  color: "#54A1A7",
                  // borderRadius: 0,
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#54A1A7",
                fontSize: "18px",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            type="submit"
            onClick={(e) => {
              if (userName && password) {
                e.preventDefault();
                submit();
              }
            }}
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
            <IconButton aria-label="delete" size="large">
              <ArrowDownwardIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        {success && (
          <Alert severity="error">
            Username already exits, Username must be unique.
          </Alert>
        )}
      </form>
    </Box>
  );
}

export default SignUpPage;
