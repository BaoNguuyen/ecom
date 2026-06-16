"use client"

import { ChevronDown } from "lucide-react";
import TextLink from "../common/TextLink/TextLink";
import { DATA_HEADER_CONTACT, DATA_HEADER_NAVIGATE, PopupSectionType } from "./_data";
import { useModal } from "@/src/providers";
import PopupLayout from "./Popup";
import { useTranslations } from "next-intl";
import Image from "next/image";
import useTheme from "@/src/hooks/use-theme";
import SearchComponent from "./Search";

export default function Header() {
    const { toggleModal } = useModal()
    const t = useTranslations('Header')

    const { resolvedTheme } = useTheme()
    const logoTheme = resolvedTheme ?? 'dark'

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

            <div className="container-v2 min-w-full h-10.5 flex items-center justify-between bg-gradient-background">
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

            <div className="container-v2 w-full flex justify-between items-center bg-gradient-background-1 py-4 gap-30">
                <Image src={`/images/logo-${logoTheme}.avif`} width='130' height='51' alt="logo" className="bg-gradient-background-1"/>

                <SearchComponent/>    
                <div></div>    
            </div>

        </header>
    )
}   