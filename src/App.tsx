import React from "react";
import "./App.css";
import Home from "./presentation/pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./presentation/styles/global";
import {
  darkTheme,
  lightTheme,
  sora1Theme,
  sora2Theme,
} from "./presentation/styles/themes";
import theme from './presentation/themes/default';
import themeSecondary from './presentation/themes/secondary';
import themeThird from './presentation/themes/third';
import { useSelector, useDispatch } from "react-redux";
import { changeSelector, isChange } from "./main/store/slices/themeSlice";
import { DefaultTheme } from 'styled-components';

function App() {
  type ThemeName = 'default' | 'theme2' | 'theme3';
  const dispatch = useDispatch();
  const changeState = useSelector(changeSelector);
  const { themeApp } = changeState;

  const themes: Record<ThemeName, DefaultTheme> = {
    default: theme,
    theme2: themeSecondary,
    theme3: themeThird,
  };

  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(isChange(e.target.value));
  };
  
  return (
    <ThemeProvider theme={themes[themeApp as ThemeName]}>
      {/* <GlobalStyle /> */}
      <div>
        <select value={themeApp} onChange={handleChangeTheme}>
          <option value="default">Default Theme</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
        <Home />
      </div>
    </ThemeProvider>

  );
}

export default App;
