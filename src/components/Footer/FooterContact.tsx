import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export const FooterContact = () => {
  return (
    <List disablePadding>
      <Typography></Typography>
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
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="nippidippi@info.com"
              sx={{
                color: "black",
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
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText
              primary="071-234-567-89"
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
