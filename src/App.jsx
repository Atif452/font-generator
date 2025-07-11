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
import { unicodeStyles } from "./unicode/unicode";
import { symbols } from "./unicode/symbols";
import LogRocket from 'logrocket';
LogRocket.init('k04irg/font-generator');

function App() {
  const [text, setText] = useState("");
  const defaultText = "Your Name";

  const fonts = [
    { id: "bold", name: "Bold", style: "bold" },
    { id: "italic", name: "Italic", style: "italic" },
    { id: "boldItalic", name: "Bold Italic", style: "boldItalic" },
    { id: "cursive", name: "Cursive", style: "cursive" },
    { id: "doubleStruck", name: "Double Struck", style: "doubleStruck" },
    { id: "fraktur", name: "Fraktur", style: "fraktur" },
    { id: "boldFraktur", name: "Bold Fraktur", style: "boldFraktur" },
    { id: "script", name: "Script", style: "script" },
    { id: "boldScript", name: "Bold Script", style: "boldScript" },
    { id: "sansSerif", name: "Sans Serif", style: "sansSerif" },
    { id: "boldSansSerif", name: "Bold Sans Serif", style: "boldSansSerif" },
    { id: "sansSerifItalic", name: "Sans Serif Italic", style: "sansSerifItalic" },
    { id: "monospace", name: "Monospace", style: "monospace" },
    { id: "boldMonospace", name: "Bold Monospace", style: "boldMonospace" },
    { id: "mathBold", name: "Math Bold", style: "mathBold" },
    { id: "mathItalic", name: "Math Italic", style: "mathItalic" },
    { id: "mathBoldItalic", name: "Math Bold Italic", style: "mathBoldItalic" },
    { id: "mathDoubleStruck", name: "Math Double Struck", style: "mathDoubleStruck" },
    { id: "mathFraktur", name: "Math Fraktur", style: "mathFraktur" },
    { id: "mathBoldFraktur", name: "Math Bold Fraktur", style: "mathBoldFraktur" },
    { id: "mathScript", name: "Math Script", style: "mathScript" },
    { id: "mathBoldScript", name: "Math Bold Script", style: "mathBoldScript" },
    { id: "mathSansSerif", name: "Math Sans Serif", style: "mathSansSerif" },
    { id: "mathBoldSansSerif", name: "Math Bold Sans Serif", style: "mathBoldSansSerif" },
    { id: "mathSansSerifItalic", name: "Math Sans Serif Italic", style: "mathSansSerifItalic" },
    { id: "mathMonospace", name: "Math Monospace", style: "mathMonospace" },
    { id: "cyrillic", name: "Cyrillic", style: "cyrillic" },
    { id: "boldCyrillic", name: "Bold Cyrillic", style: "boldCyrillic" },
    { id: "boldGreek", name: "Bold Greek", style: "boldGreek" },
    { id: "armenian", name: "Armenian", style: "armenian" },
    { id: "latinExtendedA", name: "Latin Extended-A", style: "latinExtendedA" },
    { id: "latinExtendedB", name: "Latin Extended-B", style: "latinExtendedB" },
    { id: "superscriptsSubscripts", name: "Superscripts/Subscripts", style: "superscriptsSubscripts" },
    { id: "latinExtendedAdditional", name: "Latin Extended Additional", style: "latinExtendedAdditional" },
    { id: "mathematicalAlphanumericSymbols", name: "Mathematical Alphanumeric Symbols", style: "mathematicalAlphanumericSymbols" },
    { id: "fullwidthLetters", name: "Fullwidth Letters", style: "fullwidthLetters" },
    { id: "frakturBold", name: "Fraktur Bold", style: "frakturBold" },
    { id: "script", name: "Script (Mathematical Script)", style: "script" },
    { id: "smallCaps", name: "Small Caps / Modifier Letters", style: "smallCaps" },
    { id: "regionalIndicator", name: "Regional Indicator (Flags)", style: "regionalIndicator" },
    { id: "aboriginal", name: "Canadian Aboriginal Syllabics Style", style: "aboriginal" }
  ];

  const convertToUnicode = (text, style) => {
    const charMap = unicodeStyles[style] || {};
    return text
      .split("")
      .map((char) => charMap[char] || char)
      .join("");
  };

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Failed to copy"));
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Copied to clipboard!");
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
                const displayText = text || defaultText;
                const styledText = convertToUnicode(displayText, font.style);
                return (
                  <Grid item xs={12} sm={6} md={4} key={font.id}>
                    <Box
                      sx={{
                        fontSize: "1.5rem",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{styledText}</span>
                      <Button
                        size="small"
                        startIcon={<ContentCopyIcon />}
                        onClick={() => handleCopy(styledText)}
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

            <Typography variant="h5" sx={{ mt: 6, mb: 2, textAlign: "center" }}>
              Popular Symbols
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {symbols.map((symbol, index) => (
                <Grid item key={index}>
                  <Box
                    onClick={() => handleCopy(symbol)}
                    sx={{
                      fontSize: "2rem",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      padding: 1,
                      borderRadius: 2,
                      textAlign: "center",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    {symbol}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;