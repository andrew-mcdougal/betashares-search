import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newDark = !isDark;

    root.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");

    setIsDark(newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded
        bg-[var(--color-primary)]
        text-white
        transition
      "
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
