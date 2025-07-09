import { useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function App() {

  
  const[darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: ( palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode 
            ? 'radial-gradient(circle, #1e3aba, #111b27)'
            : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 6
        }}
      >

        <Container maxWidth='xl' sx={{mt: 8}}>
        <Outlet />
      </Container>
      </Box>
      
    </ThemeProvider>
    
  ) 
}
