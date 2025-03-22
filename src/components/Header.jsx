import React, { useState } from 'react';
import { Typography, Box, Button, Modal, Link } from '@mui/material';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        marginBottom: '30px',
        position: 'relative',
      }}
    >
      {/* App Name */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Orbitron, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Game Name Generator
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '300',
          color: '#f0f0f0',
        }}
      >
        Create Stylish Names for Your Gaming Profile
      </Typography>

     
    </Box>
  );
};

export default Header;