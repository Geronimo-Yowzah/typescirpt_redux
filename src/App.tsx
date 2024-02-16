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
import theme from './themes/default';
import themeSecondary from './themes/secondary';
import { useSelector, useDispatch } from "react-redux";
import { toggleSelector } from "./store/slices/toggleSlice";
import { changeSelector, isChange } from "./store/slices/themeSlice";

function App() {
  const dispatch = useDispatch();
  const toggleState = useSelector(toggleSelector);
  const changeState = useSelector(changeSelector);
  const { isToggle, style } = toggleState;
  const { themeApp } = changeState;
  const themeMode = theme;

  // const handleTheme = (defaultTheme: String) => {
  //     switch (defaultTheme) {
  //       case 'default':
  //         theme
      
  //       default:
  //         break;
  //     }
  // };

  const handleChangeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStyle = event.target.value.toString;
    dispatch(isChange());
  };
  return (
    <ThemeProvider theme={themeMode}>
      {/* <GlobalStyle /> */}
      <div>
        <select value={themeApp} onChange={handleChangeTheme}>
          <option value="default">ThemePrimary</option>
          <option value="secondary">ThemeSecondary</option>
        </select>
        <Home />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
