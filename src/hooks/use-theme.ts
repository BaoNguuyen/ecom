"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export default function useTheme() {
    const { theme, setTheme, resolvedTheme } = useNextTheme();


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (resolvedTheme) {
            setIsLoading(false);
        }
    }, [resolvedTheme]);

    const toggleTheme = () => {
        setIsLoading(true);

        setTimeout(() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
            setIsLoading(false);
        }, 300);
    };

    return {
        theme,
        resolvedTheme,
        isLoading,
        toggleTheme,
        setTheme,
    };
}