import React from "react";
import { Box } from "@mui/material";

const FontPreview = ({ text, font }) => {
  return (
    <Box
      sx={{
        fontFamily: font,
        fontSize: "2rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        p: 2,
        mb: 2,
      }}
    >
      {text}
    </Box>
  );
};

export default FontPreview;