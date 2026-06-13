"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type Placement =
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "center";

type ModalOptions = {
    rect?: DOMRect;
    placement?: Placement;
    offset?: number;
};

type ModalContextType = {
    isOpen: boolean;
    content: ReactNode | null;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: (content?: ReactNode, options?: ModalOptions) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);
    const [styleProps, setStyleProps] = useState<React.CSSProperties>({});

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const toggleModal = (newContent?: ReactNode, options?: ModalOptions) => {
        if (newContent) {
            setContent(newContent);
        }

        if (options) {
            const { rect, placement = "bottom-left", offset = 8 } = options;
            let computedStyles: React.CSSProperties = { position: "fixed" };

            if (placement === "center") {
                computedStyles = {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                };
            } else if (rect) {
                switch (placement) {
                    case "bottom-left":
                        computedStyles.top = rect.bottom + offset;
                        computedStyles.left = rect.left;
                        break;
                    case "bottom-right":
                        computedStyles.top = rect.bottom + offset;
                        computedStyles.right = window.innerWidth - rect.right;
                        break;
                    case "bottom-center":
                        computedStyles.top = rect.bottom + offset;
                        computedStyles.left = rect.left + rect.width / 2;
                        computedStyles.transform = "translateX(-50%)";
                        break;
                    case "top-left":
                        computedStyles.bottom = window.innerHeight - rect.top + offset;
                        computedStyles.left = rect.left;
                        break;
                    case "top-right":
                        computedStyles.bottom = window.innerHeight - rect.top + offset;
                        computedStyles.right = window.innerWidth - rect.right;
                        break;
                }
            }
            setStyleProps(computedStyles);
        }

        setIsOpen((prev) => !prev);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                toggleModal,
                content,
            }}>
            {children}

            {isOpen && content && (
                <>
                    <div className="fixed inset-0 z-40" onClick={closeModal} />

                    <div
                        className="fixed z-50 animate-in fade-in zoom-in-95 duration-200"
                        style={styleProps}
                    >
                        {content}
                    </div>
                </>
            )}
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