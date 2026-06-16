"use client"

import { DATA_FOOTER_MORE_INFOR, DATA_FOOTER_PAYMENT, DATA_FOOTER_SOCIAL_LINK, DATA_HEADER_CONTACT, FOOTER_SERVICE_BENEFITS, PopupSectionType } from "./_data";
import { IconsImages } from "../../assets/icons";
import Icons from "../common/Icons";
import Link from "next/link";
import TextLink from "../common/TextLink/TextLink";
import { ChevronDown } from "lucide-react";
import { useModal } from "@/src/providers";
import PopupLayout from "./Popup";
import { useTranslations } from "next-intl";

export default function Footer() {
    const { toggleModal } = useModal()
    const t = useTranslations('Footer')
    const tHeader = useTranslations('Header')

    const dataLanguage = DATA_HEADER_CONTACT[DATA_HEADER_CONTACT.length - 1]
    const StartIcon = dataLanguage.icon

    const handleModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PopupSectionType[]) => {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();

        toggleModal(
            <PopupLayout data={data} />,
            {
                rect,
                placement: "top-left",
                offset: 8
            }
        );
    }

    const sectionKeyMap: Record<string, string> = {
        helpInfo: 'helpInfo',
        topCollections: 'topCollections',
        holidays: 'holidays',
    }

    return (
        <footer className="flex flex-col w-full bg-color-bg">
            <div className="container-v2 grid w-full grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-x-1 max-lg:gap-y-3 items-center my-6">
                {FOOTER_SERVICE_BENEFITS.map((item) => {
                    return (
                        <div key={item.title} className="flex items-center gap-2 text-text max-lg:justify-center">
                            <Icons
                                src={IconsImages[item.icon as keyof typeof IconsImages]}
                                width={32}
                                height={32}
                            />
                            <span className="text-sm leading-5 font-bold">{t(`benefits.${item.title}`)}</span>
                        </div>
                    )
                })}
            </div>

            <div className="container-v2 relative h-40">
                <div className="absolute inset-0 bg-[url('/images/footer-banner.jpg')] bg-cover bg-center opacity-30 z-10 min-w-full" />
                <div className="relative flex items-center h-full z-20 gap-x-6 max-md:flex-col">
                    <div className="w-[50%] text-center text-text max-md:w-full max-md:mb-4">
                        <p className="text-[clamp(19px,calc(11.8px+1.125vw),28px)] font-semibold">{t('newsletter.title')}</p>
                        <p className="text-[clamp(13px,calc(11.4px+0.25vw),15px)]">{t('newsletter.description')}</p>
                    </div>
                    <div className="flex w-[30%] border border-secondary-button rounded-lg px-2 py-2 text-text max-md:w-full max-md:py-1">
                        <input
                            type="text"
                            placeholder={t('newsletter.placeholder')}
                            className="h-10 flex-1 w-full outline-0"
                        />
                        <button className="max-w-33.75 h-10 bg-secondary-button text-secondary-button-text/70 rounded-sm cursor-pointer text-[14px] px-8.25 ">
                            {t('newsletter.subscribe')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-v2 flex flex-col w-full pt-14">
                <div className="grid grid-cols-5 max-lg:grid-cols-3 gap-x-12 gap-y-12">
                    <div className="col-span-2 flex flex-col gap-y-1 text-text-white">
                        <p className="text-[18px] mb-6 ">{t('contact.needHelp')}</p>
                        <p className="font-bold text-[24px] mb-3">{t('contact.phone')}</p>
                        <p className="text-[15px]">{t('contact.address')}</p>
                        <p className="text-[15px]">{t('contact.email')}</p>
                        <div className="flex gap-4 mt-4">
                            {DATA_FOOTER_SOCIAL_LINK.map((item) => (
                                <Link key={item.icon} href={item.link} target="_blank">
                                    <Icons
                                        src={IconsImages[item.icon as keyof typeof IconsImages]}
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>

                    {DATA_FOOTER_MORE_INFOR.map((items, index) => {
                        const sectionKey = Object.keys(items)[0];
                        const links = items[sectionKey as keyof typeof items] || [];
                        return (
                            <div key={index} className="col-span-1">
                                <p className="text-[18px] mb-6 leading-5 text-color-text">
                                    {t(`${sectionKeyMap[sectionKey]}.label`)}
                                </p>
                                <ul className="text-text-white">
                                    {(links as { title: string; link: string }[]).map((item) => {
                                        return (
                                            <li className="w-full flex justify-start align-center mb-4" key={item.title}>
                                                <TextLink
                                                    link={item.link}
                                                    text={t(`${sectionKeyMap[sectionKey]}.${item.title}` as any)}
                                                    className="justify-start"
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <span className="text-center text-text-white text-[56px] leading-20 font-bold font-smooch py-6">{t('slogan')}</span>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line-and-border pb-4 pt-2 mx-3 max-md:flex-col">
                <div className="flex items-center gap-4">
                    <TextLink
                        key={dataLanguage.type}
                        link={dataLanguage.link}
                        text={tHeader('contact.language')}
                        variant="secondary"
                        startIcon={<StartIcon size={16} />}
                        endIcon={dataLanguage.type === "language" && <ChevronDown size={12} />}
                        onClick={(e) => dataLanguage.type === "language" ? handleModal(e, dataLanguage.children as PopupSectionType[]) : null}
                    />
                </div>

                <p className="text-center text-[12px] font-dm-sans text-text">
                    © 2026, <Link href='' className="underline">Maximize Vast</Link>. <Link href={""} className="underline">Powered by Shopify</Link>
                </p>

                <div className="flex gap-x-1">
                    {DATA_FOOTER_PAYMENT.map((item) => (
                        <Icons
                            key={item.icon}
                            src={IconsImages[item.icon as keyof typeof IconsImages]}
                            width={38}
                            height={24}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}