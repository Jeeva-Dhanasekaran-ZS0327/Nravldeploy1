// components/Button.tsx
import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

interface ButtonStyle {
  primary: React.CSSProperties;
  secondary: React.CSSProperties;
}

const styleButton: ButtonStyle = {
  primary: {
    width: "100%",
    backgroundColor: "#25A53B",
    color: "#FFFFFF",
    borderRadius: "10px",
    textTransform: "none",
  },
  secondary: {
    width: "100%",
    textTransform: "none",
    backgroundColor: "#FFFFFF",
    color: " #1E454066",
    border: "1px solid #1e45401a",
  },
};

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  buttonStyle: "primary" | "secondary";
}

function CustomButton({ buttonStyle, ...rest }: CustomButtonProps) {
  const styledButton =
    buttonStyle === "secondary" ? styleButton.secondary : styleButton.primary;

  return (
    <Grid width="100%">
      <Button style={styledButton} size="medium" {...rest}></Button>
    </Grid>
  );
}

export default CustomButton;
