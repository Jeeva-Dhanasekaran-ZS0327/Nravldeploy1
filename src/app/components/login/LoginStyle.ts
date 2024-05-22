import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";

export const LoginStyle = {
  paperStyle: {
    marginLeft: "auto",
    marginRight: "6.8%",
    width: "500px",
    borderRadius: "24px",
    boxShadow: "0px 0px 23.4px 0px rgba(0, 0, 0, 0.2)",
  },
  headerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logInGridWrap: {
    backgroundImage: `url(${ASSET_KEYS.loginBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContnet: "flex-end",
  },
  inputTextField: {
    "& .MuiOutlinedInput-input": {
      fontSize: "20px",
      // padding: "13px",
      padding:"10px, 18px, 10px, 18px",
      fontFamily: "Trebuchet MS",
      fontWeight: 400,
      color: "#1E4540B2",
      opacity: 0.7,
      borderRadius: "10px",
      boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.08)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A7AEAC",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A7AEAC",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#30261D33",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "5px",
      marginRight: "0px",
    },
    "& .MuiInputAdornment-root": {
      marginLeft: "-2px",
      marginRight: "-5px",
    },
  },
  labelStyles: {
    marginBottom: "5px",
    paddingLeft: "5px",
    fontSize:"18px",
    fontWeight: 400,
    color: "#1E4540",
  },
  passwordTextField: {
    "& fieldset": {
      boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.08)",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "20px",
      padding:"10px, 18px, 10px, 18px",
      fontFamily: "Trebuchet MS",
      fontWeight: 400,
      color: "#1E4540B2",
      opacity: 0.7,
      borderRadius: "10px 0 0 10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A7AEAC",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A7AEAC",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#30261D33",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "5px",
      marginRight: "0px",
    },
    "& .MuiInputAdornment-root": {
      marginLeft: "-2px",
      marginRight: "-5px",
    },
  },
  buttonDisabledStyle: {
    opacity: "0.3",
    pointerEvents: "none",
    cursor: "not-allowed",
  },
  registerTextStyle:{
    fontWeight:"400",
    color:"#1E4540",
    fontSize:"36px",
    lineHeight:"41.8px"
  },
  forgotPasswordText:{
    fontFamily: "Trebuchet MS",
    color:"#1E4540",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "23.22px",
    textAlign:"right"
  },
  loginAsTextStyle:{
    fontWeight:"400",
    color:"#1E4540",
    fontSize:"36px",
    lineHeight:"41.8px"
  },
  backButtonStyle:{
    textTransform:"none",
    fontSize: "20px",
    fontWeight:"400",
    lineHeight:"23.22px",
    width:"100%",
    paddingBottom:"27px",
    paddingTop:"148px",
    color:"#1E4540"
  }
};
