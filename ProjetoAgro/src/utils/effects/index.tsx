import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

type AnimationType = {
    classe?: string,
    section?: string
}

export const Animation = ({classe, section}: AnimationType) => {
        useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to({classe}, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 10,
    })
        })
}

