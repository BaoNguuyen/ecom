"use client"

import { ChevronDown, ShoppingCart, User } from "lucide-react";
import TextLink from "../common/TextLink/TextLink";
import { DATA_HEADER_CONTACT, DATA_HEADER_NAVIGATE, PopupSectionType } from "./_data";
import { useModal } from "@/src/providers";
import PopupLayout from "./Popup";
import { useTranslations } from "next-intl";
import Image from "next/image";
import useTheme from "@/src/hooks/use-theme";
import SearchComponent from "./Search";
import LogoutComponent from "./Logout";
import PopupAvatar from "./PopupAvatar";
import PopupCart from "./PopupCart";

export default function Header() {
    const { toggleModal } = useModal()
    const t = useTranslations('Header')

    const { resolvedTheme } = useTheme()
    const logoTheme = resolvedTheme ?? 'light'

    const handleModalCategory = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data?: PopupSectionType[]) => {
        event.stopPropagation();
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();

        toggleModal(<PopupLayout data={data as PopupSectionType[]} />, {
            rect,
            placement: "bottom-center",
            offset: 8
        });
    }

    const handleModalUser = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();

        toggleModal(<PopupAvatar />, {
            rect,
            placement: "bottom-center",
            offset: 8
        });
    }

    const handleModalCart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();

        toggleModal(<PopupCart />, {
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
                                onClick={(e) => item.type === "language" ? handleModalCategory(e, item.children) : null}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="container-v2 w-full flex justify-between items-center bg-gradient-background-1 py-4 gap-30">
                <Image src={`/images/logo-${logoTheme}.avif`} width='130' height='51' alt="logo" className="bg-gradient-background-1" />

                <SearchComponent />
                <div className="flex items-center gap-2">
                    <LogoutComponent />

                    <div
                        className="flex items-center gap-2 cursor-pointer w-10 h-10 rounded-full bg-gradient-background-1 justify-center"
                        onClick={(e) => handleModalUser(e)}
                    >
                        <User size={20} />
                    </div>

                    <div
                        className="flex items-center gap-1 cursor-pointer rounded-full bg-gradient-background-1 justify-center"
                        onClick={(e) => handleModalCart(e)}
                    >
                        <ShoppingCart size={20} />
                        <span className="text-xs text-text font-bold bg-gradient-background rounded-full px-1 w-5 h-5 flex justify-center items-center">2</span>
                    </div>
                </div>

            </div>

        </header >
    )
}   