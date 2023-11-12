import { Alert, Box, TextField, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { loginIdAPI } from "../../utils/api";
import UserContext from "../../context/UserContext";

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

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { setUserId } = useContext(UserContext);

  const submit = async () => {
    let data = {
      username: userName,
      password: password,
    };
    const response = await loginIdAPI(data);
    if (response.status !== "success") {
      setSuccess(true);
    }
    if (response.status === "success") {
      setUserId(response.id);
      navigate("/form");
    }
    setUserName("");
    setPassword("");
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
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ParaText>User name</ParaText>
        <TextField
          id="outlined-size-small"
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="User name"
          hiddenLabel
          sx={{
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
              "& fieldset": {},
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "1px solid white!important",
                color: "#54A1A7",
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
          id="outlined-size-small"
          required
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
      </form>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submit();
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
        <Alert severity="error">Username or password is wrong.</Alert>
      )}
    </Box>
  );
}

export default LoginPage;
