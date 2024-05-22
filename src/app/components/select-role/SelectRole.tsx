"use client";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoginStyle } from "../login/LoginStyle";
import Image from "next/image";
import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";
import { GLOBAL_MESSAGE } from "@/app/utils/constants/StringConstants";
import CustomButton from "../shared-components/Button";
import AutocompleteField from "../shared-components/Autocomplete";
import { useRouter } from "next/navigation";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { toast } from "react-toastify";
import { getRoleList } from "../controllers/RoleController";
import { saveToSessionStorage } from "@/app/utils/common/SessionStorageUtils";
import withoutProtectedRouteLayout from "../login/WithoutProtectedRoute";

function SelectRole() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [roleOptions, setRoleOptions] = useState<string[]>([]);
  const { instance, accounts } = useMsal();
  const [selectRole, setSelectRole] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (accounts.length) {
      getToken();
    } else {
      setLoading(false);
    }
  }, [accounts]);

  useEffect(() => {
    if (isAuthenticated) {
      saveToSessionStorage("loginStatus", { isLoggedIn: true });
      setLoggedIn(true)
    } else {
      saveToSessionStorage("loginStatus", { isLoggedIn: false });
    }
  }, [isAuthenticated]);

  const roleList = async () => {
    try {
      const response = await getRoleList();
      if (response?.status === 200 && Array.isArray(response?.data)) {
        setRoleOptions(response?.data);
      } else {
        toast.info("No data found");
      }
    } catch (error) {
      toast.error("Failed to fetch roles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getToken = async () => {
    try {
      console.log("Acquiring token silently", instance);
      const response = await instance.acquireTokenSilent({
        account: accounts[0],
        scopes: ["User.Read"],
      });
      sessionStorage.setItem(
        "expiryTime",
        response.expiresOn ? response.expiresOn.toString() : ""
      );
      sessionStorage.setItem("accessToken", response.accessToken);
      roleList();
    } catch (error) {
      toast.error("Failed to acquire token. Redirecting to login...");
      console.error("Token acquisition failed:", error);
      setLoading(false);
      router.push("/login");
    }
  };


  const handleRoleChange = (event: any, value: React.SetStateAction<null>) => {
    setSelectRole(value);
  };
  const isFormValid = () => {
    return selectRole !== null;
  };
  const handleBackButton = () => {
    router.push("/login");
  };

  const handleContinueButton = () => {
    if (selectRole === "teacher") {
      router.push("/student");
    }
  };
  return (
    <>

{loggedIn ? (
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
              <Typography sx={LoginStyle.loginAsTextStyle} mt={1}>
                {GLOBAL_MESSAGE.loginAsText}
              </Typography>
            </Grid>
            <Grid mt={5.4} pl={5} pr={5}>
              <Grid>
                <AutocompleteField
                  name="role"
                  data-testid="role"
                  label={GLOBAL_MESSAGE.selectRoleText}
                  shrink={true}
                  onChange={handleRoleChange}
                  placeholder={GLOBAL_MESSAGE.selectRolePlaceholder}
                  options={roleOptions}
                  defaultValue={undefined}
                />
              </Grid>
            </Grid>
            <Grid display="flex" justifyContent="center" px={5} pt={6}>
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
                disabled={!isFormValid()}
                onClick={handleContinueButton}
              >
                {GLOBAL_MESSAGE.continueButton}
              </CustomButton>
            </Grid>
            <Button
              sx={LoginStyle.backButtonStyle}
              type="submit"
              onClick={handleBackButton}
            >
              {GLOBAL_MESSAGE.backButton}
            </Button>
          </Paper>
        </Grid>
        ) : (
          <></>
        )}
      
    </>
  );
}

export default withoutProtectedRouteLayout(SelectRole);
