import { useScroll, useSpring } from 'motion/react';

export default function useScrollProgress({
    stiffness = 100,
    damping = 30
} = {}) {
    // scrollYProgress goes from 0 (top of the page) to 1 (bottom of the page)
    const { scrollYProgress } = useScroll();

    // useSpring smooths the value so the bar glides instead of jumping
    const scaleX = useSpring(scrollYProgress, { stiffness, damping });

    return scaleX;
}
