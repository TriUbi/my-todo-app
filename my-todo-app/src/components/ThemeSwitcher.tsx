import { Button } from "antd";
import styled from "styled-components";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeButton = styled(Button)<{ $themeMode: string }>`
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#f5f5f5" : "#444"};
  color: ${({ $themeMode }) => ($themeMode === "light" ? "#333" : "#fff")};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#e0e0e0" : "#666"};
  }
`;

const ThemeSwitcher: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <ThemeButton
      $themeMode={theme}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </ThemeButton>
  );
};

export default ThemeSwitcher;
