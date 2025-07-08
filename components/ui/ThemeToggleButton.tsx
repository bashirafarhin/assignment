"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { JSX } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = (): JSX.Element | null => {
  // const { theme, setTheme, resolvedTheme } = useTheme();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button onClick={() => setTheme(isDark ? "light" : "dark")}>
      <span>{isDark ? <Sun /> : <Moon />}</span>
    </Button>
  );
};

export default ThemeToggleButton;
