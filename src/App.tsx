import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import {
  darkTheme,
  lightTheme,
  sora1Theme,
  sora2Theme,
} from "../src/styles/themes";
import { useSelector } from "react-redux";
import { toggleSelector } from "./store/slices/toggleSlice";

function App() {
  const toggleState = useSelector(toggleSelector);
  const { isToggle, style } = toggleState;
  const themeMode = style === 'sora1' ? sora1Theme : sora2Theme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
    
  );
}

export default App;
