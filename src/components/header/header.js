import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import * as Elements from './header-elements/header-elements';

import './header.scss';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box component="header" className="header">
      <Box className="container">
        <Box className="header__inner">
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Elements.Logo />
          </Box>
          <Box
            component="nav"
            className="header__desktop-menu"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Elements.Nav />
          </Box>
          <Elements.Drawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;