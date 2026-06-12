"use client";

import { createContext, useContext, useState } from "react";

type ModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};


const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({children}: {children: React.ReactNode}) {
    const [isOpen, setIsOpen] = useState(false)

    const value = {
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      };

    return (
        <ModalContext.provider value={value}>
            {children}
        <ModalContext.provider/>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
};
