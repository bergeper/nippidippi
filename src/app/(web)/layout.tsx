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
import React, { Suspense, useState } from "react";
import { type PropsWithChildren } from "react";
import { useSession } from "next-auth/react";
import { NavMenu } from "~/components/Menu/NavMenu";
import Link from "next/link";
import rainingChips from "public/images/rainingChips.jpg";
import np from "public/images/ni.png";
import { theme } from "~/styles/theme/theme";
import { FooterContentHolder } from "~/components/Footer/FooterContentHolder";
import Loading from "./loading";
import Image from "next/image";

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
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          background: "#EEE3AC",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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

          <Box
            component="div"
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                width: "auto",
                fontWeight: "bold",
                // pr: 1,
              }}
            >
              Nippi
            </Typography>
            <Image
              src={np.src}
              width={40}
              height={40}
              style={{ height: "auto" }}
              alt="NippiDippi"
            />
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                width: "auto",
                fontWeight: "bold",
                // pl: 1,
              }}
            >
              Dippi
            </Typography>
          </Box>

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
                  <Link
                    id="my-pages"
                    href="/my-pages"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      href="/my-pages"
                      onClick={handleClose}
                      sx={{ color: "black" }}
                    >
                      My Pages
                    </MenuItem>
                  </Link>
                  <Link
                    id="settings"
                    style={{ textDecoration: "none" }}
                    href="/my-pages/settings"
                  >
                    <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                      Settings
                    </MenuItem>
                  </Link>
                  <Link
                    id="results"
                    href="/my-pages/results"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      href="/my-pages/results"
                      sx={{ color: "black" }}
                    >
                      Results
                    </MenuItem>
                  </Link>
                </MenuList>
              )}
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                style={{ textDecoration: "none" }}
              >
                <MenuItem sx={{ color: "black" }}>
                  {session ? "Sign out" : "Sign in"}
                </MenuItem>
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
          minWidth: 360,
          minHeight: "90vh",
          backgroundImage: `${ImgOverlay}, url(${rainingChips.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5,
          [theme.breakpoints.down("sm")]: {
            pt: 7,
            flexDirection: "column",
            minHeight: "666px",
          },
        }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Box>
      <FooterContentHolder />
    </>
  );
}
