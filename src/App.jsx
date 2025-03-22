import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import { unicodeStyles } from "./unicode/unicode";

// Function to convert normal text to stylized Unicode text
function convertToUnicode(text, style) {
  const charMap = unicodeStyles[style] || {};
  return text
    .split("")
    .map((char) => charMap[char] || char) // Convert characters to Unicode or leave as is
    .join("");
}

function App() {
  const [text, setText] = useState("");
  const defaultText = "Your Name"; // Centralized default text

  const fonts = [
    { id: "Press Start 2P", name: "Pixel Font", style: "script" },
    { id: "VT323", name: "Retro Pixel", style: "bold" },
    { id: "Silkscreen", name: "Silkscreen", style: "italic" },
    { id: "Orbitron", name: "Futuristic", style: "boldItalic" },
    { id: "Rajdhani", name: "Techy", style: "doubleStruck" },
    { id: "Audiowide", name: "Audiowide", style: "monospace" },
    { id: "Great Vibes", name: "Cursive", style: "cursive" },
    { id: "UnifrakturMaguntia", name: "Gothic", style: "fraktur" },
    { id: "Courier New", name: "Small Caps", style: "smallCaps" },
    { id: "Comic Sans MS", name: "Circled", style: "circled" },
    { id: "Impact", name: "Squared", style: "squared" },
    { id: "Times New Roman", name: "Inverted", style: "inverted" },
    // Add more fonts with corresponding styles...
  ];

  // Function to copy the stylized Unicode content
  const handleCopy = (style) => {
    const textToCopy = text || defaultText; // Use centralized default text
    const fancyText = convertToUnicode(textToCopy, style);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fancyText).then(() => {
        alert("Copied to clipboard!");
      }).catch((err) => {
        alert("Failed to copy. Please try again.");
      });
    }
  };

  return (
    <>
    <header>

      <Navbar />
    </header>
    <main>

      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mt: 9, mb: 5 }}>
          <Header />
          <Box
            sx={{
              position: "relative",
              padding: "2px",
              borderRadius: "4px",
              background: "linear-gradient(45deg, #FE6B8B, #FF8E53, #FE6B8B)",
              backgroundSize: "200% 200%",
              animation: "gradientAnimation 3s ease infinite",
              mb: 4,
            }}
            >
            <TextField
              fullWidth
              label="Enter your name"
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{
                backgroundColor: "background.paper",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              />
          </Box>
          <Grid container spacing={2}>
            {fonts.map((font) => {
              const fancyText = convertToUnicode(text || defaultText, font.style);
              return (
                <Grid item xs={12} sm={6} md={4} key={font.id}>
                  <Box
                    sx={{
                      fontFamily: font.id,
                      fontSize: "1.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{fancyText}</span>
                    <Button
                      className="copy-button"
                      size="small"
                      startIcon={<ContentCopyIcon />}
                      onClick={() => handleCopy(font.style)}
                    >
                      Copy
                    </Button>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                    {font.name}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
            
   
            </main>

      <Footer />
            
    </>
  );
}

export default App;