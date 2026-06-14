import { useState } from "react";
import Dropdown from "../common/dropdown";
import { PopupItemType, PopupSectionType } from "./_data"

type PopupLayoutProps = {
    data: PopupSectionType[];
};

export type ValueType = {
    Language: string,
    Currency: string,
};

export default function PopupLayout({ data }: PopupLayoutProps) {
    const [numberOpen, setNumberOpen] = useState<number | null>(null);
    const [value, setValue] = useState<ValueType>({
        Language: 'vi',
        Currency: 'usd',
    });


    const handleModal = (data: PopupItemType, type: keyof ValueType) => {
        setValue((prev) => ({ ...prev, [type]: data.value }))
        setNumberOpen(null)
    };

    const handleToggle = (index: number) => {
        setNumberOpen(index)
    }

    const handleSaveDate = () => {
        console.log(value);
    }


    return (
        <div
            className="flex flex-col gap-4 bg-color-bg ring-[0.5px] ring-[var(--color-text)] shadow-xl rounded-lg p-2 min-w-[200px]"
        >
            {data.length && data?.map((section, index) => {
                const selectedItem = section.list.find(
                    item => item.value === value[section.name as keyof ValueType]
                );
                return (
                    <div key={index} className="w-full flex flex-col ">
                        <span className="text-sm leading-[20px] font-bold text-[var(--color-text)] mb-2">{section.name}</span>

                        <Dropdown
                            value={selectedItem?.content ?? ''}
                            data={section.list}
                            isOpen={numberOpen === index}
                            handleModal={handleModal}
                            onToggle={() => handleToggle(index)}
                            type={section.name as keyof ValueType}
                        />
                    </div>
                )
            })}


            <button
                onClick={handleSaveDate}
            >Save</button>
        </div>)
}