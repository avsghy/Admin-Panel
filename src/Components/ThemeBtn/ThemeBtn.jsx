import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../ThemeContext/ThemeContext";
function ThemeBtn() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button className="theme-button" onClick={toggleTheme}>
      {isDark ? <BsSun /> : <BsMoon />}
    </button>
  );
}
export default ThemeBtn;
