"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import TableUi from "../shared-components/TableUi";
import { studentTableConfig } from "../tableConfigurations/StudentTableConfig";
import Image from "next/image";
import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AutocompleteField from "../shared-components/Autocomplete";
import { GLOBAL_MESSAGE } from "@/app/utils/constants/StringConstants";
import { getUserDetails } from "../controllers/UserInfoController";
import withProtectedRouteLayout from "../login/WithProtectedRoute";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  border: "1px solid #1E45401A",
  borderRadius: "12px",
  color: theme.palette.text.secondary,
}));
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Student() {
  const role = "student";
  const [value, setValue] = React.useState(0);
  const [interactionType, setInteractionType] = useState("Attitude");
  console.log("interactionType", interactionType);
  const [userData, setUserData] = useState({
    firstname: "",
    dateofbirth: "",
    userid: "",
  });
  const interactionOptions = [
    "Attitude",
    "Trajectbegeleiding",
    "Zorgcoördinatie",
    "Tuchtmaatregel",
  ];

  // useEffect(() => {
  //   userInformation();
  // }, []);
  useEffect(() => {
    if (value === 2) console.log("TAB", value);
  }, [value]);

  useEffect(() => {
    const userInformation = async () => {
      try {
        const response = await getUserDetails();
        const userId = response?.data?.userId.split("@")[0];
        console.log("response", response);
        setUserData({
          firstname: response?.data?.firstName,
          dateofbirth: formatDate(response?.data?.dateOfBirth),
          userid: userId,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    userInformation();
  }, []);
  // const userInformation = async () => {
  //   try {
  //     const response = await getUserDetails();
  //     const userId = response?.data?.userId.split("@")[0];
  //     console.log("response", response);
  //     setUserData({
  //       firstname: response?.data?.firstName,
  //       dateofbirth: formatDate(response?.data?.dateOfBirth),
  //       userid: userId,
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleInteractionType = (event: any, value: any) => {
    setInteractionType(value);
  };

  const staticData = [
    {
      Module: "Math",
      Opleding: "Bachelor's",
      Resultaat: "Pass",
      Begindatum: "2022-01-01",
      Einddatum: "2022-05-01",
      Location: "New York",
    },
    {
      Module: "English",
      Opleding: "Master's",
      Resultaat: "Fail",
      Begindatum: "2022-02-15",
      Einddatum: "2022-06-15",
      Location: "Los Angeles",
    },
    {
      Module: "Science",
      Opleding: "Bachelor's",
      Resultaat: "Pass",
      Begindatum: "2022-03-10",
      Einddatum: "2022-07-10",
      Location: "Chicago",
    },
  ];

  const studentTableData = {
    tableHeaders: studentTableConfig.tableHeaders,
    // tableFields: studentTableConfig.tableFields,
    tableContents: staticData,
    sortingKeys: studentTableConfig.sortinKeys,
  };

  return (
    <Grid mt="38px" px={7.1}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
          <Item>
            <Grid pt={5.25} pb={7.8}>
              <Image
                width={100}
                height={100}
                alt="Jo Triest"
                src={ASSET_KEYS.studentProfilePlaceholder}
              />
            </Grid>
            <Grid
              container
              display="flex"
              // sx={{
              //   paddingLeft: "48.5px",
              //   paddingRight: "48.5px",
              // }}
            >
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  paddingLeft: "48.5px",
                  fontFamily: "Trebuchet MS",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "18.58px",
                  textAlign: "left",
                }}
              >
                <Typography pb={3.5}>Naam</Typography>
                <Typography pb={3.5}>Geboortedatum</Typography>
                <Typography pb={3.5}>Cursistennummer</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  paddingLeft: "32px",

                  color: "#1E4540",
                  fontFamily: "Trebuchet MS",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "18.58px",
                  textAlign: "left",
                }}
              >
                <Typography pb={3.5}>{userData.firstname}</Typography>
                <Typography pb={3.5}>{userData.dateofbirth}</Typography>
                <Typography pb={3.5}>{userData.userid}</Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
          <Item>
            <Grid>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    textDecoration: "none",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Inschrijvingen"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Vrijstellingen"
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Interacties"
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Typography
                    sx={{
                      color: "#1E4540",
                      fontFamily: "Trebuchet MS",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "23.22px",
                      textAlign: "left",
                    }}
                    pb={3.75}
                  >
                    Inschrijvingen
                  </Typography>
                  <TableUi role={role}></TableUi>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <Typography
                    sx={{
                      color: "#1E4540",
                      fontFamily: "Trebuchet MS",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "23.22px",
                      textAlign: "left",
                    }}
                  >
                    Vrijstellingen
                  </Typography>
                  <TableUi role={role}></TableUi>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Grid
                    sx={{ display: "flex", alignItems: "center" }}
                    pb={3.75}
                  >
                    <Typography
                      pr={1.8}
                      sx={{
                        color: "#1E4540",
                        fontFamily: "Trebuchet MS",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "23.22px",
                        textAlign: "left",
                      }}
                    >
                      Interacties
                    </Typography>
                    <Grid
                      sx={{
                        width: "160px",
                      }}
                    >
                      <AutocompleteField
                        name="interaction"
                        data-testid="interaction"
                        shrink={true}
                        onChange={handleInteractionType}
                        placeholder={GLOBAL_MESSAGE.selectRolePlaceholder}
                        options={interactionOptions}
                        defaultValue={interactionType}
                      />
                    </Grid>
                  </Grid>
                  <TableUi tableData={studentTableData} role={role}></TableUi>
                </CustomTabPanel>
              </Box>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withProtectedRouteLayout(Student);
