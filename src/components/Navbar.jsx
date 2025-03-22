import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Modal, Box, Link, Avatar } from '@mui/material';
import myImage from "../assets/my.jpg"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

          {/* Developer Details Button */}
          <Button
            color="inherit"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            onClick={handleOpen}
          >
            Developer Info
          </Button>
        </Toolbar>
      </AppBar>

      {/* Developer Details Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="developer-details-modal"
        aria-describedby="developer-details-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Developer Details
          </Typography>

          <Avatar
            alt="Developer"
            src={myImage}
            sx={{
              width: 100,
              height: 100,
              margin: '0 auto 20px',
              border: '3px solid #FF8E53',
            }}
          />
          
          <Typography variant="h5" sx={{ mb: 2 }}>
            <strong>Atif</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Contact: <Link href="mailto:uatif453@gmail.com">uatif453@gmail.com</Link>
          </Typography>
          
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;