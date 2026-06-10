import TextLink from "../common/TextLink/TextLink";
import { DATA_HEADER_CONTACT, DATA_HEADER_NAVIGATE } from "./_data";

export default function Header() {
    return (
        <header className="flex flex-col w-full">

            <div className="w-full h-[42px] flex items-center bg-gradient-background px-8">
                <div className="flex items-center gap-4">
                    {DATA_HEADER_NAVIGATE.map((item) => (
                        <TextLink key={item.name} link={item.link} text={item.name} />
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {DATA_HEADER_CONTACT.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.content} className="flex items-center gap-2">
                                <Icon className="text-red-500" size={16} />
                                <TextLink link={item.link} text={item.content} />
                            </div>
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