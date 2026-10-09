import { useState, useEffect } from "react";

// This works exactly like useState, with one extra feature:
// the value is also saved in the browser, so your products
// are still there after you refresh the page.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved === null) return initialValue;

      const data = JSON.parse(saved);
      // Safety check: if we expect a list but the saved data is broken, start fresh.
      if (Array.isArray(initialValue) && !Array.isArray(data)) return initialValue;
      return data;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // The browser may block saving (for example in private mode).
      // The app still works, it just will not remember the data.
    }
  }, [key, value]);

  return [value, setValue];
}
