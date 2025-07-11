import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Badge,
} from '@mui/material';
import DeveloperInfo from './DeveloperInfo';
import NewUpdates from './NewUpdates';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  const [open, setOpen] = useState(false); // Developer Info modal
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor
  const [updateModalOpen, setUpdateModalOpen] = useState(false); // New Updates modal
  const [showUpdateDot, setShowUpdateDot] = useState(true); // Show red dot

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeveloperInfoClick = () => {
    setOpen(true);
    handleClose();
  };

  const handleNewUpdatesClick = () => {
    setUpdateModalOpen(true);
    setShowUpdateDot(false); // Hide dot after user views the update
    handleClose();
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1e1e1e',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
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

          {/* Hamburger Icon with red dot */}
          <IconButton color="inherit" onClick={handleOpen}>
            <Badge
              color="error"
              variant="dot"
              invisible={!showUpdateDot}
              overlap="circular"
            >
              <ReorderIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#333',
            borderRadius: '10px',
            marginTop: '10px',
            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {/* New Updates MenuItem with red dot */}
        <MenuItem
          onClick={handleNewUpdatesClick}
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&:hover': {
              backgroundColor: '#FF8E53',
            },
          }}
        >
          <Badge
            color="error"
            variant="dot"
            invisible={!showUpdateDot}
            sx={{ mr: 1 }}
          >
            <span>New Updates</span>
          </Badge>
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

      <DeveloperInfo open={open} handleClose={() => setOpen(false)} />
      <NewUpdates open={updateModalOpen} handleClose={() => setUpdateModalOpen(false)} />
    </>
  );
};

export default Navbar;
