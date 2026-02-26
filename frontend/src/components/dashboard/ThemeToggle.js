"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 opacity-0"></div>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-background/60 hover:text-background transition-colors hover:bg-surface/10 rounded-full"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
