import * as React from "react";
import { Stack, Button, Box, Divider, Menu, MenuItem, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileOpen(open);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "white",
          ml: 5,
          mr: 5,
          py: 4,
          height:0,
        }}
      >
        <img src="logo.svg" className="logo" alt="logo" width={50} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 8 }}>
          <Button
            id="basic-button"
            color="inherit"
            size="medium"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            PRODUCTS
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem onClick={handleClose}></MenuItem>
            <MenuItem onClick={handleClose}></MenuItem>
          </Menu>
          <Button color="inherit" size="medium">GALLERY</Button>
          <Button color="inherit" size="medium">CONTACT</Button>
        </Box>

        <Stack spacing={3} direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" variant="text">LOG IN</Button>
          <Button sx={{ bgcolor: "black", color: "white" }} variant="contained">SIGN UP</Button>
        </Stack>
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <ListItem button>
                <ListItemText primary="PRODUCTS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="GALLERY" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="CONTACT" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="LOG IN" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SIGN UP" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Divider sx={{ bgcolor: "white" }} />
      </Box>
    </>
  );
};

export default Navbar;
