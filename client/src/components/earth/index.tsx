import { Canvas, useLoader } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';

const Earth = () => {
    const scence = useRef(null)
    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/earth/color.jpg',
        '/assets/earth/normal.jpg',
        '/assets/earth/clouds.jpg',
    ])
    const { scrollYProgress } = useScroll({
        target: scence,
        offset: ['start center', 'end start']
    });
    return (
        <Canvas ref={scence}>
            <ambientLight intensity={0.06} />
            <directionalLight intensity={1.5} position={[1, 0, -.30]} />
            <motion.mesh scale={2} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]}/>    
                <meshStandardMaterial color={color} normalMap={normal} aoMap={aoMap}/>
            </motion.mesh>
        </Canvas>
    )
}

export default Earth