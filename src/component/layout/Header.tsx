"use client"

import { ChevronDown } from "lucide-react";
import TextLink from "../common/TextLink/TextLink";
import { DATA_HEADER_CONTACT, DATA_HEADER_NAVIGATE } from "./_data";

export default function Header() {
    const handleModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data?: Array<{ content: string }>) => {
        const element = event.currentTarget
        const rect = element.getBoundingClientRect()
        console.log(data, rect.width, rect.left)
    }

    return (
        <header className="flex flex-col w-full">

            <div className="w-full h-[42px] flex items-center justify-between bg-gradient-background px-8">
                <div className="flex items-center gap-4">
                    {DATA_HEADER_NAVIGATE.map((item) => (
                        <TextLink key={item.name} link={item.link} text={item.name} />
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {DATA_HEADER_CONTACT.map((item) => {
                        const StartIcon = item.icon;
                        return (
                            <TextLink
                                key={item.content}
                                link={item.link}
                                text={item.content}
                                variant="secondary"
                                startIcon={<StartIcon size={16} />}
                                endIcon={item.type === "language" && <ChevronDown size={12} />}
                                onClick={(e) => item.type === "language" ? handleModal(e, item.children) : null}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="w-1/2 flex justify-end">
                <h1 className="text-neutral">Header</h1>
            </div>

        </header>
    )
}   