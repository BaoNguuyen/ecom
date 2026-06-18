import useTheme from "@/src/hooks/use-theme";
import { cn } from "@/src/lib/utils";
import { MoonIcon, LoaderCircle, SunIcon } from "lucide-react";

export default function LogoutComponent({ }) {
    const { theme, isLoading, toggleTheme } = useTheme()


    return (
        <div className="">
            <div
                className="relative flex gap-2.5 items-center ring-[0.5px] ring-text p-1.5 rounded-2xl"
                onClick={() => toggleTheme()}
            >
                <MoonIcon width={20} height={20}
                    className={cn()} />
                <SunIcon width={20} height={20}
                    className={cn()} />

                <div className={cn(
                    "flex items-center justify-center w-6.5 h-6 rounded-full bg-spin-background",
                    "absolute top-1 left-1",
                    // theme === 'dark' ? 'left-0' : 'right-1',
                )} />

                {/* <div className="flex items-center justify-center w-6 h-6 rounded-full bg-spin-background">
                    {isLoading && <LoaderCircle width={30} height={30} className=" size-4 animate-spin" />}
                </div> */}

            </div>
        </div>
    )
}