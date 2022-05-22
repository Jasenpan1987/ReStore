import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../features/about/About";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import Contact from "../../features/contact/Contact";
import Home from "../../features/home/Home";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleToggleThemeMode={setDarkMode} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="catalog">
            <Route path="" element={<Catalog />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
