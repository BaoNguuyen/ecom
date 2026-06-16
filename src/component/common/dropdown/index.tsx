import { useRef, useState, type Ref } from "react";
import { cn } from "@/src/lib/utils";
import { ChevronDown } from "lucide-react";


type BaseItem = {
    content: string;
    value: string;
};


type DropdownProps<T extends BaseItem> = {
    value: string;
    data: T[];
    handleChooseItem: (item: T) => void;
    onToggle: () => void;
    isOpen: boolean;
    mode?: 'popup' | 'search';
};


export default function Dropdown<T extends BaseItem>({
    value,
    data,
    isOpen,
    handleChooseItem,
    onToggle,
    mode = 'popup'
}: DropdownProps<T>) {
    const [placement, setPlacement] = useState<"top" | "bottom">("bottom");

    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();

        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        setPlacement(
            spaceBelow < 250 && spaceAbove > spaceBelow
                ? "top"
                : "bottom"
        );

        onToggle()
    };


    const variantStyles = {
        popup: {
            container: "bg-color-bg h-13",
            button: "my-1 ring-[0.5px] ring-text rounded-lg",
            modal: "bg-color-bg ring-[0.5px] ring-text",
        },
        search: {
            container: "bg-gradient-background-2 h-9 rounded-lg",
            button: "",
            modal: "bg-gradient-background-2 mt-0.5",
        },
    };

    return (
        <div className={cn(
            "flex text-text relative ",
            variantStyles[mode].container )}
        >
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className={cn("w-full flex items-center justify-between leading-5 px-4 py-3 rounded-lg text-[12px] ", variantStyles[mode].button)}
            >
                <span>{value}</span>
                <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} />
            </button>

            <div
                className={cn(
                    "absolute left-0 flex flex-col gap-1 shadow-xl rounded-lg p-2 w-full text-[12px] z-30",
                    "overflow-hidden",
                    variantStyles[mode].modal,
                    placement === "top"
                        ? "bottom-full origin-bottom"
                        : "top-full origin-top",

                    "transition-all duration-300 ease-in-out",
                    isOpen
                        ? "max-h-75 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="w-full flex cursor-pointer py-1 rounded px-2 hover:bg-white/40 transition-colors duration-150"
                        onClick={() => handleChooseItem(item)}
                    >
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}