import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        style={{
          "--s": "200px",
          "--c1": "#101010",
          "--c2": "#101010",
          "--c3": "#101010",
          background: `repeating-conic-gradient(
            from 30deg,
            #0000 0 120deg,
            var(--c3) 0 180deg
          ) calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
          repeating-conic-gradient(
            from 30deg,
            var(--c1) 0 60deg,
            var(--c2) 0 120deg,
            var(--c3) 0 180deg
          )`,
          backgroundSize: `var(--s) calc(var(--s) * 0.577)`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
            color: "white",
          }}
        >
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Typography variant="h6" component="div" sx={{ mx: 2 }}>
                About
              </Typography>
              <Typography variant="h6" component="div" sx={{ mx: 2 }}>
                Experience
              </Typography>
              <Typography variant="h6" component="div" sx={{ mx: 2 }}>
                Projects
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Experience" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
