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
          What’s New
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          ✅ <strong>New Fonts Added:</strong> We've introduced a fresh set of stylish Unicode fonts to give users even more ways to express their text uniquely.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          🧹 <strong>Cleaned Up:</strong> Removed outdated and less useful font styles for a cleaner, faster, and more focused experience.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          🔥 <strong>Popular Symbols:</strong> You can now explore and copy a curated list of popular Unicode symbols like stars, arrows, music icons, and more—just one click to copy!
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          🚀 <strong>Enhancements:</strong> Overall performance improvements, bug fixes, and UI enhancements, especially in text rendering and responsive design.
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
