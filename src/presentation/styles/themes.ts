export interface ThemeProps {
  backgroundColor: string;
  background: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  backgroundColor: "var(--dark-background)",
  background: "",
  text: "var(--dark-text)",
};

export const lightTheme: ThemeProps = {
  backgroundColor: "var(--light-background)",
  background: "",
  text: "var(--light-text)",
};

export const sora1Theme: ThemeProps = {
  backgroundColor: "",
  background: "var(--motphGradient)",
  text: "var(--dark-text)",
};

export const sora2Theme: ThemeProps = {
    backgroundColor: "",
    background: "var(--SorasoGradient)",
    text: "var(--dark-text)",
  };
