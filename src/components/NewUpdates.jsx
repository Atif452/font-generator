import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const NewUpdates = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-updates-modal"
      aria-describedby="new-updates-description"
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
          New Updates
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>New Fonts Added:</strong> We have added several new stylish fonts to enhance your experience!
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Bug Fixes:</strong> We've fixed some issues related to font rendering and the navbar responsiveness.
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

export default NewUpdates;
