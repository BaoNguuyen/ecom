import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { textLinkVariants } from "./Styled";

type TextLinkProps = {
    text: string;
    link: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function TextLink({
    text,
    link,
    className = '',
    variant = 'primary',
    startIcon = '',
    endIcon = '',
    onClick,
    ...props
}: TextLinkProps) {

    return (
        <Link onClick={onClick} href={link} className={cn(textLinkVariants({ variant }), className)} {...props}>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-0.5">{endIcon}</span>}
        </Link>
    );
}