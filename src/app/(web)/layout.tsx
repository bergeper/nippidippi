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
import React, { useState } from "react";
import { type PropsWithChildren } from "react";
// import { Auth } from "~/components/Auth/Auth";
import { useSession } from "next-auth/react";
import { NavMenu } from "~/components/Menu/NavMenu";
import { theme } from "~/styles/theme/theme";
import Link from "next/link";

export default function HomeLayout({ children }: PropsWithChildren) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

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
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
            edge="start"
            sx={{
              marginRight: 3,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NippiDippi
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
              {status === "authenticated" && (
                <>
                  <MenuItem href="/my-pages" onClick={handleClose}>
                    My Pages
                  </MenuItem>
                  <MenuItem onClick={handleClose} href="/my-pages/settings">
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose} href="/my-pages/results">
                    Results
                  </MenuItem>
                </>
              )}
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                {session ? "Sign out" : "Sign in"}
              </Link>
              {/* {status === "unauthenticated" && <Auth />} */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <NavMenu
        isOpen={isMainMenuOpen}
        closeMenu={() => setIsMainMenuOpen(!isMainMenuOpen)}
      />
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          width: "auto",
          padding: "1rem",
          background: theme.palette.primary.dark,
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          height: "40px",
          backgroundColor: "black",
          bottom: 0,
        }}
      >
        Footen
      </Box>
    </>
  );
}
