"use client";

import { createContext, useContext, useState } from "react";

type ModalContextType = {
};


const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        </>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
};