"use client";


import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type ModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: (rectWidth?: number, rectLeft?: number, fullHeight?: number, fullWidth?: number) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);


export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({
        rectWidth: 0,
        rectLeft: 0,
        fullHeight: 0,
        fullWidth: 0
    })

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const toggleModal = (rectWidth?: number, rectLeft?: number, fullHeight?: number, fullWidth?: number) => {
        setPosition({
            rectWidth: rectWidth || 0,
            rectLeft: rectLeft || 0,
            fullHeight: fullHeight || 0,
            fullWidth: fullWidth || 0
        })

        setIsOpen((prev) => !prev);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                toggleModal,
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside ModalProvider");
    }

    return context;
};