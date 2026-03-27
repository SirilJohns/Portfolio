import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "app-shell dark-mode" : "app-shell"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  );
}

export default App;
