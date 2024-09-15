import { FC, useLayoutEffect, useRef } from "react";
import styles from "./video-mask.module.scss";

const initialMaskSize = .8;

const targetMaskSize = 30;

const easing = 0.15;

let easedScrollProgress = 0

const VideoMaskComponent: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  useLayoutEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (!stickyMask.current || !container.current) return;
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    console.log("mask", maskSizeProgress);
    
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }
  
  
  
  const getScrollProgress = (): number => {
    if (!stickyMask.current || !container.current) return 0;
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
    }
  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/assets/video/Cosmos.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default VideoMaskComponent;
