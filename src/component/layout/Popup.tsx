import { PopupSectionType } from "./_data"


type PopupLayoutProps = {
    data: PopupSectionType[];
};

export default function PopupLayout({ data }: PopupLayoutProps) {
    return (
        <div className="flex flex-col gap-1 bg-color-bg border border-gray-200 shadow-xl rounded-lg p-2 min-w-[200px]">
            {data.length && data?.map((section, i) => (
                <div key={i} className="w-full flex flex-col ">
                    <span className="text-sm leading-[20px] font-bold">{section.name}</span>
                    {section?.list.map((item, index) => (
                        <div
                            key={index}
                            className="text-sm hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer transition-colors text-[var(--color-text)]"
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            ))}


            <button>Save</button>
        </div>)
}