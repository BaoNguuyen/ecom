import { cn } from "@/src/lib/utils";
import Link from "next/link";
import styles from "./TextLink.module.css";

type TextLinkProps = {
    text: string;
    link: string;
    className?: string;
};

export default function TextLink({
    text,
    link,
    className = "",
}: TextLinkProps) {
    return (
        <Link
            href={link}
            className={cn(
                styles.navLink,
                className
            )}
        >
            {text}
        </Link>
    );
}