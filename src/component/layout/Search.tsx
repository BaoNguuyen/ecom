import { useState } from "react";
import Dropdown from "../common/dropdown";
import { SearchIcon } from "lucide-react";

export type CategoryItem = {
    content: string;
    value: string;
};

const DATA_CATEGORIES: CategoryItem[] = [
    {
        content: 'All categories',
        value: 'all'
    },
    {
        content: 'Armchair',
        value: 'armchair'
    },
    {
        content: 'Candle Holders',
        value: 'candle_holders'
    },
    {
        content: 'Decor Bundle',
        value: 'decor_bundle'
    },
    {
        content: 'Cushions',
        value: 'cushions'
    },
    {
        content: 'Curtains',
        value: 'curtains'
    },
    {
        content: 'Mirrors',
        value: 'mirrors'
    },
    {
        content: 'Trays & Bowls',
        value: 'trays_bowls'
    },
    {
        content: 'Throws',
        value: 'throws'
    },
    {
        content: 'Vases',
        value: 'vases'
    },
    {
        content: 'Others',
        value: 'others'
    },
]

export default function SearchComponent({ }) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(DATA_CATEGORIES[0].content);


    const handleChooseItem = (item: CategoryItem) => {
        setValue(item.content)
        setIsOpen(false)
    }

    return (
        <div className="flex items-center ring-[0.5px] ring-text h-11.5 p-1.5 rounded-lg w-full">
            <Dropdown
                value={value}
                data={DATA_CATEGORIES}
                isOpen={isOpen}
                handleChooseItem={(item) => handleChooseItem(item)}
                onToggle={() => setIsOpen(prev => !prev)}
                mode="search"
            />

            <input
                placeholder="What are you searching for?"
                className="ml-3 text-xs flex-1 min-w-10 outline-0"
            />

            <SearchIcon width={20} height={20} className=""/>
        </div>
    )
}