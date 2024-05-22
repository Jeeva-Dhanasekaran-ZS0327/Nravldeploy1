"use client";
import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";
import {
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "../shared-components/Button";
import { LoginStyle } from "./LoginStyle";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { GLOBAL_MESSAGE } from "@/app/utils/constants/StringConstants";
import { useMsal } from "@azure/msal-react";
import { authScopes } from "../../../../auth-config";
import withoutProtectedRouteLayout from "./WithoutProtectedRoute";

function Login() {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { instance } = useMsal();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleInputChange = (event: {
    target: { name: string; value: any };
  }) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (name === "userName") {
      setUserNameError("");
    } else if (name === "password") {
      setPasswordError("");
    }
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let hasError = false;
    if (userData.userName === "") {
      setUserNameError("Please enter userName");
      hasError = true;
    } else {
      setUserNameError("");
    }
    if (userData.password === "") {
      setPasswordError("please enter password");
      hasError = true;
    } else {
      setPasswordError("");
    }
  };
  async function handleLogin() {
    try {
      await instance.loginRedirect(authScopes);
    } catch (e) {
      console.error(e);
    }
  }

  const isFormValid = () => {
    return userData.userName !== "" && userData.password !== "";
  };
  return (
    <Grid width="100%" sx={LoginStyle.logInGridWrap}>
      <Paper sx={LoginStyle.paperStyle}>
        <Grid sx={LoginStyle.headerWrap}>
          <Grid mt={6.5}>
            <Image
              src={ASSET_KEYS.navrlLogo}
              height={72}
              width={100}
              alt="navrl logo"
            ></Image>
          </Grid>
          <Typography sx={LoginStyle.registerTextStyle} mt={1}>
            {GLOBAL_MESSAGE.registerText}
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid mt={5.4} pl={5} pr={5}>
            <Grid>
              <InputLabel sx={LoginStyle.labelStyles}>
                {GLOBAL_MESSAGE.userNameLabel}
              </InputLabel>
              <TextField
                name="userName"
                fullWidth
                onChange={handleInputChange}
                placeholder={GLOBAL_MESSAGE.userNamePlaceholder}
                sx={LoginStyle.inputTextField}
                error={!!userNameError}
                helperText={userNameError}
              />
            </Grid>
            <Grid mt={3}>
              <>
                <InputLabel sx={LoginStyle.labelStyles}>
                  {GLOBAL_MESSAGE.passwordLabel}
                </InputLabel>

                <TextField
                  name="password"
                  sx={LoginStyle.passwordTextField}
                  fullWidth
                  variant="outlined"
                  onChange={handleInputChange}
                  placeholder={GLOBAL_MESSAGE.passwordPlaceholder}
                  error={!!passwordError}
                  helperText={passwordError}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          data-testid="passButton"
                          className="rem1FSize"
                        >
                          {!showPassword ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            </Grid>
            <Grid mt={2}>
              <Typography sx={LoginStyle.forgotPasswordText}>
                {GLOBAL_MESSAGE.forgotPassword}
              </Typography>
            </Grid>
          </Grid>
          <Grid display="flex" justifyContent="center" px={5} pt={4.6} pb={6.5}>
            <CustomButton
              type="submit"
              sx={{
                fontSize: "28px",
                ...(isFormValid()
                  ? {}
                  : {
                      opacity: "0.3",
                      pointerEvents: "none",
                      cursor: "not-allowed",
                    }),
              }}
              color="primary"
              buttonStyle={"primary"}
              onClick={() => handleLogin()}
              disabled={!isFormValid()}
            >
              {GLOBAL_MESSAGE.loginButton}
            </CustomButton>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default withoutProtectedRouteLayout(Login);
