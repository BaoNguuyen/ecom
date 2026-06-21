import useTheme from "@/src/hooks/use-theme";
import { cn } from "@/src/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();


    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="
                relative
                flex
                items-center
                w-18.75
                h-9.5
                rounded-full
                p-1
                cursor-pointer
                bg-gradient-background-1
                ring-[0.5px]
                ring-text-tripple/20
                backdrop-blur-sm
                transition-all
                duration-300
            "
        >
            <div className="relative z-10 flex w-full items-center justify-between px-2 gap-[10.5px]">
                <SunIcon
                    size={30}
                    className={cn(
                        "transition-all duration-300",
                        theme === "light"
                            ? "opacity-100 scale-100"
                            : "opacity-40 scale-90"
                    )}
                />

                <MoonIcon
                    size={30}
                    className={cn(
                        "transition-all duration-300",
                        theme === "dark"
                            ? "opacity-100 scale-100"
                            : "opacity-40 scale-90"
                    )}
                />


            </div>

            <div
                className={cn(
                    `
                    absolute
                    top-1.25
                    left-2
                    w-7
                    h-7
                    rounded-full
                    bg-spin-background
                    border border-white/10
                    shadow-lg
                    transition-all duration-300
                    `,
                    theme === "dark" && "translate-x-7.5"
                )}
            />
        </button>
    );
}