"use client";

import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React, { type Dispatch, type SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";
import { theme } from "~/styles/theme/theme";

interface Props {
  isOpen: boolean;
  closeMenu: Dispatch<SetStateAction<boolean>>;
}

export const NavMenu = ({ isOpen, closeMenu }: Props) => {
  const { data: session } = useSession();

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      closeMenu(isOpen);
    };
  return (
    <>
      <React.Fragment>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 240,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh",
              background: theme.palette.primary.main,
            }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List id="main-menu">
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  onClick={() => toggleDrawer(false)}
                  edge="start"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Link id="home" color="inherit" href="/">
                <ListItem sx={{ p: 0.5 }}>
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon sx={{ p: 0.5 }}></ListItemIcon>
                    <ListItemText primary="Home" sx={{ p: 0.5 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link id="spinner" color="inherit" href="/spinner">
                <ListItem sx={{ p: 0.5 }}>
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon sx={{ p: 0.5 }}></ListItemIcon>
                    <ListItemText primary="NippiDippi Wheel" sx={{ p: 0.5 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link id="toplist" color="inherit" href="/toplist">
                <ListItem sx={{ p: 0.5 }}>
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon sx={{ p: 0.5 }}></ListItemIcon>
                    <ListItemText primary="Toplist" sx={{ p: 0.5 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
              {session && (
                <Link id="my-pages" color="inherit" href="/my-pages">
                  <ListItem sx={{ p: 0.5 }}>
                    <ListItemButton sx={{ p: 0.5 }}>
                      <ListItemIcon sx={{ p: 0.5 }}></ListItemIcon>
                      <ListItemText primary="My Pages" sx={{ p: 0.5 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

/*
<ListItemButton
                sx={{
                  ...listItemButtonStyle,
                  backgroundColor: pathname.includes("dashboard")
                    ? "#d3dce6"
                    : theme.palette.common.white,
                }}
              >
                <ListItemIcon sx={listItemIconStyle}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={listItemTextStyle} />
              </ListItemButton>
*/
