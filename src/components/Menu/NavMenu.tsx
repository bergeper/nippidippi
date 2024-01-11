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
import AutoModeIcon from "@mui/icons-material/AutoMode";
import PersonIcon from "@mui/icons-material/Person";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

import HomeIcon from "@mui/icons-material/Home";
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
              background: theme.palette.custom.custom,
            }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List id="main-menu">
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  aria-label="close drawer"
                  onClick={() => toggleDrawer(false)}
                  edge="start"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <ListItem sx={{ p: 0.5 }}>
                <Link id="home" href="/" style={{ textDecoration: "none" }}>
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        minWidth: 0,
                        mr: "auto",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Home"
                      sx={{ p: 0.5, color: "black" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem sx={{ p: 0.5 }}>
                <Link
                  id="spinner"
                  href="/spinner"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        minWidth: 0,
                        mr: "auto",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <AutoModeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="NippiDippi Wheel"
                      sx={{ p: 0.5, color: "black" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem sx={{ p: 0.5 }}>
                <Link
                  id="toplist"
                  href="/toplist"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton sx={{ p: 0.5 }}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        minWidth: 0,
                        mr: "auto",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <FormatListNumberedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Toplist"
                      sx={{ p: 0.5, color: "black" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
              {session && (
                <ListItem sx={{ p: 0.5 }}>
                  <Link
                    id="my-pages"
                    href="/my-pages"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ p: 0.5 }}>
                      <ListItemIcon
                        sx={{
                          display: "flex",
                          minWidth: 0,
                          mr: "auto",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="My Pages"
                        sx={{ p: 0.5, color: "black" }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};
