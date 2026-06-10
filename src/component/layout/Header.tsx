export default function Header() {
    return (
        <header className="flex flex-row w-full">
            <div className="bg-red-500 w-1/2">
                <h1>Header</h1>
            </div>
            <div className="bg-blue-500 w-1/2 flex justify-end">
                <div className="w-[24px] h-[24px] bg-red-500"></div>
            </div>
        </header>
    )
}