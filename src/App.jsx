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
import { unicodeStyles } from "./unicode/unicode"; // Ensure this file has your Unicode mappings

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
    { id: "glagolitic", name: "Glagolitic", style: "glagolitic" },
    { id: "runic", name: "Runic", style: "runic" },
    { id: "cyrillic", name: "Cyrillic", style: "cyrillic" },
    { id: "boldCyrillic", name: "Bold Cyrillic", style: "boldCyrillic" },
    { id: "greek", name: "Greek", style: "greek" },
    { id: "boldGreek", name: "Bold Greek", style: "boldGreek" },
    { id: "armenian", name: "Armenian", style: "armenian" },
    { id: "georgian", name: "Georgian", style: "georgian" },
    { id: "hebrew", name: "Hebrew", style: "hebrew" },
    { id: "arabic", name: "Arabic", style: "arabic" },
    { id: "persian", name: "Persian", style: "persian" },
    { id: "latinExtendedA", name: "Latin Extended-A", style: "latinExtendedA" },
    { id: "latinExtendedB", name: "Latin Extended-B", style: "latinExtendedB" },
    { id: "gothic", name: "Gothic", style: "gothic" },
    { id: "oldEnglish", name: "Old English", style: "oldEnglish" },
    { id: "tibetan", name: "Tibetan", style: "tibetan" },
    { id: "devanagari", name: "Devanagari", style: "devanagari" },
    { id: "thai", name: "Thai", style: "thai" },
    { id: "khmer", name: "Khmer", style: "khmer" },
    { id: "bengali", name: "Bengali", style: "bengali" },
    { id: "kanji", name: "Kanji", style: "kanji" },
    { id: "hangul", name: "Hangul", style: "hangul" },
    { id: "chinese", name: "Chinese", style: "chinese" },
    { id: "greekExtended", name: "Greek Extended", style: "greekExtended" },
    { id: "combiningDiacriticalMarks", name: "Combining Diacritical Marks", style: "combiningDiacriticalMarks" },
    { id: "latin1Supplement", name: "Latin-1 Supplement", style: "latin1Supplement" },
    { id: "currencySymbols", name: "Currency Symbols", style: "currencySymbols" },
    { id: "mathSymbols", name: "Math Symbols", style: "mathSymbols" },
    { id: "dingbats", name: "Dingbats", style: "dingbats" },
    { id: "boxDrawing", name: "Box Drawing", style: "boxDrawing" },
    { id: "blockElements", name: "Block Elements", style: "blockElements" },
    { id: "geometricShapes", name: "Geometric Shapes", style: "geometricShapes" },
    { id: "miscellaneousSymbols", name: "Miscellaneous Symbols", style: "miscellaneousSymbols" },
    { id: "arrows", name: "Arrows", style: "arrows" },
    { id: "mathematicalOperators", name: "Mathematical Operators", style: "mathematicalOperators" },
    { id: "musicalSymbols", name: "Musical Symbols", style: "musicalSymbols" },
    { id: "superscriptsSubscripts", name: "Superscripts/Subscripts", style: "superscriptsSubscripts" },
    { id: "enclosedAlphanumerics", name: "Enclosed Alphanumerics", style: "enclosedAlphanumerics" },
    { id: "combiningHalfMarks", name: "Combining Half Marks", style: "combiningHalfMarks" },
    { id: "latinExtendedAdditional", name: "Latin Extended Additional", style: "latinExtendedAdditional" },
    { id: "hangulSyllables", name: "Hangul Syllables", style: "hangulSyllables" },
    { id: "privateUseArea", name: "Private Use Area", style: "privateUseArea" },
    { id: "variationSelectors", name: "Variation Selectors", style: "variationSelectors" },
    { id: "bidiControls", name: "Bidi Controls", style: "bidiControls" },
    { id: "cjkSymbols", name: "CJK Symbols", style: "cjkSymbols" },
    { id: "alphabeticPresentationForms", name: "Alphabetic Presentation Forms", style: "alphabeticPresentationForms" },
    { id: "arabicPresentationFormsA", name: "Arabic Presentation Forms-A", style: "arabicPresentationFormsA" },
     { id: "combiningMarksSupplement", name: "Combining Marks Supplement", style: "combiningMarksSupplement" },
    { id: "cjkCompatibility", name: "CJK Compatibility", style: "cjkCompatibility" },
    { id: "cjkCompatibilityForms", name: "CJK Compatibility Forms", style: "cjkCompatibilityForms" },
    { id: "hangulCompatibilityJamo", name: "Hangul Compatibility Jamo", style: "hangulCompatibilityJamo" },
    { id: "kanbun", name: "Kanbun", style: "kanbun" },
    { id: "yiSyllables", name: "Yi Syllables", style: "yiSyllables" },
    { id: "cyrillicExtendedA", name: "Cyrillic Extended-A", style: "cyrillicExtendedA" },
    { id: "cyrillicExtendedB", name: "Cyrillic Extended-B", style: "cyrillicExtendedB" },
    { id: "gothicSupplement", name: "Gothic Supplement", style: "gothicSupplement" },
    { id: "byzantineMusicalSymbols", name: "Byzantine Musical Symbols", style: "byzantineMusicalSymbols" },
    { id: "musicalNotations", name: "Musical Notations", style: "musicalNotations" },
    { id: "mathematicalAlphanumericSymbols", name: "Mathematical Alphanumeric Symbols", style: "mathematicalAlphanumericSymbols" },
    { id: "mahjongTiles", name: "Mahjong Tiles", style: "mahjongTiles" },
    { id: "dominoTiles", name: "Domino Tiles", style: "dominoTiles" },
    { id: "playingCards", name: "Playing Cards", style: "playingCards" }
];




  

  // Convert text to Unicode-styled text
  const convertToUnicode = (text, style) => {
    const charMap = unicodeStyles[style] || {};
    return text
      .split("")
      .map((char) => charMap[char] || char)
      .join("");
  };

  // Copy the STYLED text (Unicode transformed)
  const handleCopy = (style) => {
    const displayText = text || defaultText;
    const styledText = convertToUnicode(displayText, style);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(styledText)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Failed to copy"));
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = styledText;
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
                      <span>{styledText}</span>
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