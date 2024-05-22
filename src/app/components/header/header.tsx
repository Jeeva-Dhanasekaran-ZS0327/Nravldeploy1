import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Switch Role", "Logout"];
function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [clientRendered, setClientRendered] = React.useState(false); // Track if component is rendered on the client

  useEffect(() => {
    setClientRendered(true); // Set clientRendered to true when component is mounted on the client
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Render null if component is not rendered on the client yet
  if (!clientRendered) {
    return null;
  }

  return (
    <>
      <AppBar
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 2px 5.8px 0px #0000001A",
          padding: "5px 32px",
        }}
        position="static"
      >
        <Container sx={{}} maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: "flex",
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  alt="LBC Logo"
                  width={64}
                  height={46}
                  src={ASSET_KEYS.navrlLogo}
                />
              </Typography>
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Grid display="flex" alignItems="center">
                <Avatar
                  alt="Jo Triest"
                  src={ASSET_KEYS.studentProfilePlaceholder}
                />
                <Grid ml={1.3} display="flex" flexDirection="column">
                  <Typography fontSize={18} color="#1E4540" fontWeight={400}>
                    Jo Triest
                  </Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    fontSize={12}
                    fontWeight={400}
                    color="#1E454066"
                    display="flex"
                    alignItems="center"
                    onClick={handleOpenUserMenu}
                  >
                    Cursiten <ArrowDropDownIcon sx={{ color: "#1E4540B2" }} />
                  </Typography>
                </Grid>
              </Grid>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;