import { useRef, useState, type Ref } from "react";
import { PopupItemType, } from "../../layout/_data";
import { cn } from "@/src/lib/utils";
import { ChevronDown } from "lucide-react";
import { ValueType } from "../../layout/Popup";

type DropdownProps = {
    value: string,
    data: PopupItemType[],
    handleModal: (data: PopupItemType, type: keyof ValueType) => void,
    onToggle: () => void,
    isOpen: boolean,
    type: keyof ValueType,
};

export default function Dropdown({ value, data, isOpen, handleModal, onToggle, type, }: DropdownProps) {
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



    return (
        <div className="flex text-[var(--color-text)] relative bg-color-bg">
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between leading-5 px-4 py-3 ring-[0.5px] ring-[var(--color-text)] rounded-lg text-[12px] my-1"
            >
                <span>{value}</span>
                <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} />
            </button>

            <div
                className={cn(
                    "absolute left-0 flex flex-col gap-1 bg-color-bg shadow-xl rounded-lg p-2 w-full ring-[0.5px] ring-[var(--color-text)] text-[12px] z-30",
                    "overflow-hidden",
                    placement === "top"
                        ? "bottom-full origin-bottom"
                        : "top-full origin-top",

                    "transition-all duration-300 ease-in-out",
                    isOpen
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="w-full flex cursor-pointer py-1 rounded px-2 hover:bg-white/40 transition-colors duration-150"
                        onClick={() => handleModal(item, type)}
                    >
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}