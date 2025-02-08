interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Modo Oscuro" : "☀ Modo Claro"}
    </button>
  );
};

export default ThemeSwitcher;
