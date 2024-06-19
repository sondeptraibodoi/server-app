import { FC, ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";

interface SmoothScrollProps {
    children: ReactNode;
  }

const SmoothScroll:FC<SmoothScrollProps> = ({children}) => {
    useEffect(() => {
        window.scrollTo(0,0);
        const lenis = new Lenis();
        const raf = (e: number) => {
            lenis.raf(e);
            requestAnimationFrame(raf);
        } 
        requestAnimationFrame(raf);
    }, [])
    return children
}

export default SmoothScroll