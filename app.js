import React from "react";
import { useLocalStorage } from "./uselocalStorage";
import "./styles.css";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("theme", false);
  return (
    <div className={isDark ? "app dark" : "app"}>
      <h1>Custom Hook: useLocalStorage</h1>

      <button onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? "Preklopi na Light" : "Preklopi na Dark"}
      </button>
    </div>
  );
}
