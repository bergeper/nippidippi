"use client";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { type PropsWithChildren } from "react";
import { useSession } from "next-auth/react";
import { NavMenu } from "~/components/Menu/NavMenu";
import Link from "next/link";
import rainingChips from "public/images/rainingChips.jpg";
import { theme } from "~/styles/theme/theme";

export default function HomeLayout({ children }: PropsWithChildren) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  const ImgOverlay = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))";
  // const ImgOverlay =
  //   "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))";

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar color="inherit" position="static" sx={{ background: " #EEE3AC" }}>
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
                <MenuList>
                  <Link id="my-pages" color="textSecondary" href="/my-pages">
                    <MenuItem href="/my-pages" onClick={handleClose}>
                      My Pages
                    </MenuItem>
                  </Link>
                  <Link
                    id="settings"
                    color="textSecondary"
                    href="/my-pages/settings"
                  >
                    <MenuItem onClick={handleClose} href="/my-pages/settings">
                      Settings
                    </MenuItem>
                  </Link>
                  <Link
                    id="results"
                    color="textSecondary"
                    href="/my-pages/results"
                  >
                    <MenuItem onClick={handleClose} href="/my-pages/results">
                      Results
                    </MenuItem>
                  </Link>
                </MenuList>
              )}
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                {session ? "Sign out" : "Sign in"}
              </Link>
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
          width: "auto",
          minHeight: "100vh",
          backgroundImage: `${ImgOverlay}, url(${rainingChips.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          height: "40px",
          width: "100%",
          background: "#EEE3AC",
          b: 0,
        }}
      >
        Footen
      </Box>
    </>
  );
}
