"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useTheme() {
    const { theme, setTheme, resolvedTheme } = useNextTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    // Return undefined for theme values until after hydration so that
    // every consumer renders the same HTML as the server (no mismatch).
    return {
        theme: mounted ? theme : undefined,
        resolvedTheme: mounted ? resolvedTheme : undefined,
        toggleTheme,
        setTheme,
    };
}