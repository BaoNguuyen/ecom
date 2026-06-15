import { useState } from "react";
import Dropdown from "../common/dropdown";
import { PopupItemType, PopupSectionType } from "./_data"
import { useTranslations } from "next-intl";
import CustomButton from "../common/button-custom";

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
        Language: 'en',
        Currency: 'usd',
    });

    const t = useTranslations('Header');

    const handleModal = (data: PopupItemType, type: keyof ValueType) => {
        setValue((prev) => ({ ...prev, [type]: data.value }))
        setNumberOpen(null)
    };

    const handleToggle = (index: number) => {
        setNumberOpen(index)
    }

    const handleSaveDate = () => {
        setNumberOpen(null)

    }

    const getTranslatedList = (section: PopupSectionType) => {
        const sectionKey = section.name.toLowerCase() as 'language' | 'currency';
        return section.list.map(item => ({
            ...item,
            content: t(`popup.${sectionKey}.${item.content}` as any),
        }));
    }

    const getSelectedContent = (section: PopupSectionType) => {
        const sectionKey = section.name.toLowerCase() as 'language' | 'currency';
        const selected = section.list.find(
            item => item.value === value[section.name as keyof ValueType]
        );
        if (!selected) return '';
        return t(`popup.${sectionKey}.${selected.content}` as any);
    }

    return (
        <div
            className="flex flex-col gap-4 bg-color-bg ring-[0.5px] ring-[var(--color-text)] shadow-xl rounded-lg p-2 min-w-[200px]"
        >
            {data.length && data?.map((section, index) => {
                return (
                    <div key={index} className="w-full flex flex-col ">
                        <span className="text-sm leading-[20px] font-bold text-[var(--color-text)] mb-2">
                            {t(`popup.${section.name.toLowerCase() as 'language' | 'currency'}.label`)}
                        </span>

                        <Dropdown
                            value={getSelectedContent(section)}
                            data={getTranslatedList(section)}
                            isOpen={numberOpen === index}
                            handleModal={handleModal}
                            onToggle={() => handleToggle(index)}
                            type={section.name as keyof ValueType}
                        />
                    </div>
                )
            })}

            <CustomButton
                text={t('popup.save')}
                onClick={handleSaveDate}
            />
        </div>)
}