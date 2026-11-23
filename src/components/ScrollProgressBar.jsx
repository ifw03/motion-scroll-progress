import React from 'react';
import { motion } from 'motion/react';
import styled from 'styled-components';
import useScrollProgress from '../useScrollProgress/useScrollProgress';

const StyledBar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    transform-origin: 0%;
    z-index: 1;
`;

export default function ScrollProgressBar({ color = 'crimson', stiffness, damping }) {
    const scaleX = useScrollProgress({ stiffness, damping });

    return <StyledBar style={{ scaleX, backgroundColor: color }} />;
}
