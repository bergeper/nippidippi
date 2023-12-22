"use client";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import { type PropsWithChildren } from "react";
import { Auth } from "~/components/Auth/Auth";
import { useSession } from "next-auth/react";

export default function HomeLayout({ children }: PropsWithChildren) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { data: session, status } = useSession();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ?
          </Typography>

          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Typography>{session?.user.username}</Typography>
              {status === "authenticated" && (
                <>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </>
              )}
              <Auth />
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ minHeight: "100vh", width: "100%" }}>
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          height: "40px",
          backgroundColor: "black",
          bottom: 0,
        }}
      ></Box>
    </>
  );
}
