import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, ToggleButton, Icon } from '@mui/material';
import DeveloperInfo from './DeveloperInfo'; // Import the DeveloperInfo component
import NewUpdates from './NewUpdates'; // Import the NewUpdates component
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  const [open, setOpen] = useState(false); // For Developer Info modal
  const [anchorEl, setAnchorEl] = useState(null); // For Menu anchor position
  const [updateModalOpen, setUpdateModalOpen] = useState(false); // For New Updates modal

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor position to the clicked button
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu when clicked outside
  };

  const handleDeveloperInfoClick = () => {
    setOpen(true); // Open the developer info modal
    handleClose(); // Close the menu
  };

  const handleNewUpdatesClick = () => {
    setUpdateModalOpen(true); // Open the new updates modal
    handleClose(); // Close the menu
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#1e1e1e', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}>
        <Toolbar>
          {/* App Name */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '2px',
            }}
          >
            CLIPPER Fonts
          </Typography>

          {/* Toggle Button */}
          <IconButton color="inherit" onClick={handleOpen}>
            <ReorderIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu for showing buttons */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#333', // Dark background for the dropdown menu
            borderRadius: '10px',
            marginTop: '10px',
            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', // Adding shadow for depth
          },
        }}
      >
        <MenuItem
          onClick={handleNewUpdatesClick}
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            color: '#fff', // White text color
            '&:hover': {
              backgroundColor: '#FF8E53', // Hover effect with a bright color
            },
          }}
        >
          New Updates
        </MenuItem>
        <MenuItem
          onClick={handleDeveloperInfoClick}
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FF8E53',
            },
          }}
        >
          Developer Info
        </MenuItem>
      </Menu>

      {/* Developer Info Modal */}
      <DeveloperInfo open={open} handleClose={() => setOpen(false)} />

      {/* New Updates Modal */}
      <NewUpdates open={updateModalOpen} handleClose={() => setUpdateModalOpen(false)} />
    </>
  );
};

export default Navbar;
