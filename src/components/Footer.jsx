import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        width:"90%",
        marginTop: 'auto', // Pushes the footer to the bottom
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Game Name Generator. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Developed by <strong>Atif</strong>
      </Typography>
     
    </Box>
  );
};

export default Footer;