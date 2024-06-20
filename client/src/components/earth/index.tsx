import { useFrame, useLoader } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { useScroll as useThreeScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Group, Vector3 } from 'three';
import { motion } from 'framer-motion-3d';
import { gsap } from 'gsap';

const Earth = () => {
    const ref = useRef<Group>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const scroll = useThreeScroll();
    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/earth/color.jpg',
        '/assets/earth/normal.jpg',
        '/assets/earth/clouds.jpg',
    ])
    const { scrollYProgress } = useScroll({
        offset: ['start center', 'end start']
    });

    useFrame(() => {
        if (tl.current && scroll) {
            tl.current.seek(scroll.offset * tl.current.duration());
        }
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(
            ref.current?.position as Vector3, {
                duration: 2,
                x: 1,
                y: 1
            }, 2
        )
        tl.current.from(
            ref.current?.position as Vector3, {
                duration: 0.5,
                x: 1,
                y: 1
            }, 0.5
        )
    }, [])

    return (
        <group ref={ref}>
            <ambientLight intensity={0.06} />
            <directionalLight intensity={1.5} position={[1, 0, -.30]} />
            <motion.mesh scale={2} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 100, 100]}/>    
                <meshStandardMaterial color={color} normalMap={normal} aoMap={aoMap}/>
            </motion.mesh>
        </group>
    )
}

export default Earth