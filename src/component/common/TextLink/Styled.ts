import { cva } from "class-variance-authority";

export const textLinkVariants = cva(
  [
    "relative flex items-center justify-center",
    "text-sm font-normal text-[var(--color-text)] leading-[20px]",
    "transition-colors duration-300 hover:text-[var(--color-highlight)]",
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2",
    "after:bottom-[-2px] after:h-px after:bg-current",
    "after:w-0 after:transition-all after:duration-300",
  ],
  {
    variants: {
      variant: {
        primary: "hover:after:w-full",
        secondary: "hover:after:w-0",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);