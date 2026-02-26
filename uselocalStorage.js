import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // inicializacija state z varnim branjem
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);

      if (stored === null) {
        return initialValue;
      }

      return JSON.parse(stored);
    } catch (error) {
      console.error("Napaka pri branju localStorage:", error);
      return initialValue;
    }
  });

  // shranjevanje ob spremembi
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Napaka pri shranjevanju:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
