import { useEffect } from "react";

export const useCloseOnOutsideClick = (ref, onClose, enabled = true) => {
    useEffect(() => {
        if (!enabled) return;
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, onClose, enabled]);
}