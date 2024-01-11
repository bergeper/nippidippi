import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export const ContactInfo = () => {
  return (
    <List disablePadding>
      <Link
        id="contact-instagram"
        color="inherit"
        href="mailto:nippidippi@info.com"
        style={{ textDecoration: "none" }}
      >
        <ListItem
          sx={{
            display: "flex",
          }}
        >
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
        </ListItem>
      </Link>
      <Link
        id="contact-instagram"
        color="inherit"
        href="https://www.instagram.com"
        style={{ textDecoration: "none" }}
      >
        <ListItem
          sx={{
            display: "flex",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              minWidth: 0,
              mr: 1,
              alignItems: "center",
              gap: 2,
            }}
          >
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText
            primary="Instagram"
            sx={{
              color: "black",
            }}
          />
        </ListItem>
      </Link>
      <Link
        id="contact-facebook"
        color="inherit"
        href="https://www.facebook.com"
        style={{ textDecoration: "none" }}
      >
        <ListItem
          sx={{
            display: "flex",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              minWidth: 0,
              mr: 1,
              alignItems: "center",
              gap: 2,
            }}
          >
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText
            primary="Facebook"
            sx={{
              color: "black",
            }}
          />
        </ListItem>
      </Link>
    </List>
  );
};
