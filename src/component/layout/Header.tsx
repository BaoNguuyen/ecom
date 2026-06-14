"use client"

import { ChevronDown } from "lucide-react";
import TextLink from "../common/TextLink/TextLink";
import { DATA_HEADER_CONTACT, DATA_HEADER_NAVIGATE, PopupSectionType } from "./_data";
import { useModal } from "@/src/providers";
import PopupLayout from "./Popup";
import { useTranslations } from "next-intl";

export default function Header() {
    const { toggleModal } = useModal()
    const t = useTranslations('Header')

    const handleModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data?: PopupSectionType[]) => {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();

        toggleModal(<PopupLayout data={data as PopupSectionType[]} />, {
            rect,
            placement: "bottom-center",
            offset: 8
        });
    }


    return (
        <header className="flex flex-col w-full">

            <div className="container-v2 min-w-full h-[42px] flex items-center justify-between bg-gradient-background">
                <div className="flex items-center gap-4">
                    {DATA_HEADER_NAVIGATE.map((item) => (
                        <TextLink key={item.name} link={item.link} text={t(`navigate.${item.name}`)} />
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {DATA_HEADER_CONTACT.map((item) => {
                        const StartIcon = item.icon;
                        const displayContent = item.type === "language"
                            ? t('contact.language')
                            : item.content;
                        return (
                            <TextLink
                                key={item.type}
                                link={item.link}
                                text={displayContent}
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