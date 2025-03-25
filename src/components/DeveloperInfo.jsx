import React from 'react';
import { Modal, Box, Typography, Avatar, Button, Link } from '@mui/material';
import myImage from "../assets/my.jpg";  // Make sure the image path is correct

const DeveloperInfo = ({ open, handleClose }) => {
  return (
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
  );
};

export default DeveloperInfo;
