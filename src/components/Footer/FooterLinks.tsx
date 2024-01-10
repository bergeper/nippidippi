import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import InfoIcon from "@mui/icons-material/Info";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Link from "next/link";
import { theme } from "~/styles/theme/theme";

export const FooterLinks = () => {
  return (
    <List disablePadding>
      <ListItem
        sx={{
          display: "block",
          p: 0,
        }}
      >
        <Link
          id="footer-menu-spinner"
          color="inherit"
          href="/spinner"
          style={{ textDecoration: "none" }}
        >
          <ListItemButton sx={{ p: 1, pl: 2 }}>
            <ListItemIcon
              sx={{
                display: "flex",
                minWidth: 0,
                mr: 1,
                alignItems: "center",
                gap: 2,
              }}
            >
              <AutoModeIcon />
            </ListItemIcon>
            <ListItemText
              primary="NippiDippi Wheel"
              sx={{
                color: theme.palette.primary.dark,
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        sx={{
          display: "block",
          p: 0,
        }}
      >
        <Link
          id="footer-menu-toplist"
          color="inherit"
          href="/toplist"
          style={{ textDecoration: "none" }}
        >
          <ListItemButton sx={{ p: 1, pl: 2 }}>
            <ListItemIcon
              sx={{
                display: "flex",
                minWidth: 0,
                mr: 1,
                alignItems: "center",
                gap: 2,
              }}
            >
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Toplist"
              sx={{
                color: theme.palette.primary.dark,
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        sx={{
          display: "block",
          textDecoration: "none",
          p: 0,
        }}
      >
        <Link
          id="footer-menu-about"
          color="inherit"
          href="/about"
          style={{ textDecoration: "none" }}
        >
          <ListItemButton sx={{ p: 1, pl: 2 }}>
            <ListItemIcon
              sx={{
                display: "flex",
                minWidth: 0,
                mr: 1,
                alignItems: "center",
                gap: 2,
              }}
            >
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              primary="About"
              sx={{
                color: "black",
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
};
