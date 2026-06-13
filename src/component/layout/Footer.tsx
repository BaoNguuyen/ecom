"use client"

import { DATA_FOOTER_MORE_INFOR, DATA_FOOTER_PAYMENT, DATA_FOOTER_SOCIAL_LINK, DATA_HEADER_CONTACT, FOOTER_SERVICE_BENEFITS, PopupSectionType } from "./_data";
import { IconsImages } from "../../assets/icons";
import Icons from "../common/Icons";
import Link from "next/link";
import TextLink from "../common/TextLink/TextLink";
import { ChevronDown } from "lucide-react";
import { useModal } from "@/src/providers";
import PopupLayout from "./Popup";

export default function Footer() {
    const { toggleModal } = useModal()
    const dataLanguage = DATA_HEADER_CONTACT[DATA_HEADER_CONTACT.length - 1]
    const StartIcon = dataLanguage.icon

    const handleModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PopupSectionType[]) => {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();


        console.log(data, "datadatadatadata")
        toggleModal(
            <PopupLayout data={data} />,
            {
                rect,
                placement: "top-left",
                offset: 8
            }
        );
    }

    return (
        <footer className="flex flex-col w-full bg-color-bg">
            <div className="container-v2 flex w-full justify-between items-center my-6">
                {FOOTER_SERVICE_BENEFITS.map((item) => {
                    return (
                        <div key={item.title} className="flex items-center gap-2 text-text">
                            <Icons
                                src={IconsImages[item.icon as keyof typeof IconsImages]}
                                width={32}
                                height={32}
                            />
                            <span className="text-sm leading-[20px] font-bold">{item.title}</span>
                        </div>
                    )
                })}
            </div>

            <div className="container-v2 relative h-40">
                <div className="absolute inset-0 bg-[url('/images/footer-banner.jpg')] bg-cover bg-center opacity-30 z-10 min-w-full" />
                <div className="relative flex items-center h-full z-20 gap-x-6">
                    <div className="w-[50%] text-center text-[var(--color-text)]">
                        <p className="text-[28px] font-semibold">Get 5% off your first order!</p>
                        <p className="text-[15px]">Learn more about special offers, promotions, events and more.</p>
                    </div>
                    <div className="flex w-[30%] border-[1px] border-secondary-button rounded-lg px-2 py-2 text-[var(--color-text)]">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="h-[40px] flex-1 w-full outline-0"
                        />
                        <button className="max-w-[135px] h-[40px] bg-secondary-button text-secondary-button-text/70 rounded-sm cursor-pointer text-[14px] px-[33px] ">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-v2 flex flex-col w-full pt-14">
                <div className="grid grid-cols-5 gap-x-12 gap-y-12">
                    <div className="col-span-2 flex flex-col gap-y-1 text-text-white">
                        <p className="text-[18px] mb-6 ">Need help? Call now!</p>
                        <p className="font-bold text-[24px] mb-3">(+84) 123 4567</p>
                        <p className="text-[15px]">Address: 75 9th Ave, New York, NY 10011-7006</p>
                        <p className="text-[15px]">Email: example@shopify.com</p>
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
                        const title = Object.keys(items)[0];
                        const links = items[title as keyof typeof items] || [];
                        return (
                            <div key={index} className="col-span-1">
                                <p className="text-[18px] mb-6 leading-[20px] text-[var(--color-text)]">{title}</p>
                                <ul className="text-text-white">
                                    {links.map((item) => {
                                        return (
                                            <li className="w-full flex justify-start align-center mb-4" key={item.title}>
                                                <TextLink link={item.link} text={item.title} className="justify-start" />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <span className="text-center text-text-white text-[56px] leading-[80px] font-bold font-smooch py-6">Bring Comfort Home</span>
            </div>

            <div className="flex items-center justify-between border-t-[1px] border-line-and-border pb-4 pt-2 mx-3">
                <div className="flex items-center gap-4">
                    <TextLink
                        key={dataLanguage.content}
                        link={dataLanguage.link}
                        text={dataLanguage.content}
                        variant="secondary"
                        startIcon={<StartIcon size={16} />}
                        endIcon={dataLanguage.type === "language" && <ChevronDown size={12} />}
                        onClick={(e) => dataLanguage.type === "language" ? handleModal(e, dataLanguage.children as PopupSectionType[]) : null}
                    />
                </div>

                <p className="text-center text-[12px] font-dm-sans text-[var(--color-text)]">
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