import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    --motphGradient: linear-gradient(91deg, 
      #2A0E63 -5.72%, 
      #4200C8 40.4%, 
      #5E008A 94.82%);
    --SorasoGradient: linear-gradient(
      135deg,
      rgba(82, 10, 122, 1) 0%,
      rgba(130, 2, 40, 1) 100%);
    --SorasoPrimary: #520a7a;
    --SorasoSecondary: #820228;
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;
    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;
  }
  body  {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundColor};
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  p {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
`;

export default withTheme(globalStyle);
