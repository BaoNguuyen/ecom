"use client";

import { useTheme as useNextTheme } from "next-themes";

export default function useTheme() {
    const { theme, setTheme, resolvedTheme } = useNextTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return {
        theme,
        resolvedTheme,
        toggleTheme,
        setTheme
    }
}