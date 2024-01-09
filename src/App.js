import React from "react";
import Form from "./components/Form";
import ListMessages from "./components/ListMessages";
import { useWeb5 } from './helpers/useWeb5';
import { useMessages } from './helpers/useMessages';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  CSSReset,
  extendTheme,
  Alert,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/signin";
import Test from "./pages/test";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PlaceholderIndex from "./pages/placeholderIndex";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      500: "#1C1C1C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    
    <BrowserRouter basename="/dehr">
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route index path="/" element={<SignInSide />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/temp" element={<PlaceholderIndex/>} /> 
    </Routes>
    </BrowserRouter>


    </ThemeProvider>
    )
}

export default App;
