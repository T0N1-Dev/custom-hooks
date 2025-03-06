import { useCallback } from "react"

export const useSmoothScroll = () => {
    const handleScroll = useCallback((e, ref, offset = 0) => {
        e.preventDefault();

        if (ref?.current) {
            const topPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
        }
    }, []);

    return handleScroll;
};
