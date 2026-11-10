import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Components/Layout/Layout";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
