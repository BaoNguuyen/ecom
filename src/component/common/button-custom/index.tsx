import { cn } from "@/src/lib/utils";

type CustomButtonProps = {
    text: string,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: 'primary' | 'secondary',
};

export default function CustomButton({
    text,
    className,
    onClick,
    disabled,
    variant = 'primary'
}: CustomButtonProps) {

    const variantStyles = {
        primary: {
            bg: "bg-secondary-button-v1",
            ripple: "before:bg-secondary-button-hover-v1",
            text: "text-button-text-1",
            textHover: "hover:text-text-secondary",
        },
        secondary: {
            bg: "bg-secondary-button-v1",
            ripple: "before:bg-secondary-button-hover-v1",
            text: "text-color-text",
            textHover: "hover:text-color-text-white",
        },
    };

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        e.currentTarget.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );

        e.currentTarget.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
        );
    }

    return (
        <button
            onMouseEnter={handleMouse}
            onMouseMove={handleMouse}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "relative overflow-hidden",
                "flex items-center justify-center",
                "rounded-lg w-full h-11",

                "[--x:50%]",
                "[--y:50%]",

                "before:content-['']",
                "before:absolute",
                "before:left-[var(--x)]",
                "before:top-[var(--y)]",

                "before:w-[300px]",
                "before:h-[300px]",

                "before:rounded-full",

                "before:-translate-x-1/2",
                "before:-translate-y-1/2",

                "before:scale-0",
                "hover:before:scale-100",

                "before:transition-transform",
                "before:duration-700",

                "before:z-0",

                variantStyles[variant].bg,
                variantStyles[variant].ripple,
                variantStyles[variant].text,
                variantStyles[variant].textHover,
                className
            )}
        >
            <span className="relative z-10 transition-colors duration-300">
                {text}
            </span>
        </button>
    )
}