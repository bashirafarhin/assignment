"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    setMounted(true);
  }, [setTheme]);

  // Step 2: Handle toggle and persist to localStorage
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button onClick={toggleTheme} className="px-2 py-2">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};

export default ThemeToggleButton;