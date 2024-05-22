"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { MsalProvider } from "@azure/msal-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import useMsalInitializer from "./components/Hooks/MsalInitializer";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#25A53B",
    },
    secondary: {
      main: "#1E4540B2",
    },
  },
  typography: {
    fontFamily: {
      main: "Trebuchet MS",
    } as any,
    // button:{
    //   fontFamily: PlusJakartaSans.style.fontFamily
    // },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const msalInstance = useMsalInitializer();

  return (
    <html lang="nl">
      <body>
        <ThemeProvider theme={customTheme}>
          <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            className="toast_message_box"
          />
          {msalInstance && (
            <MsalProvider instance={msalInstance}>{children}</MsalProvider>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}