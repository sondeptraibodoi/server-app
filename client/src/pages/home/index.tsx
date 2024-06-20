import { Canvas } from '@react-three/fiber';
import style from './home.module.scss';
import { lazy } from 'react';
// import SmoothScroll from '@/hook/useScroll';
const SmoothScroll = lazy(() => import('../../hook/useScroll'));
const Earth = lazy(() => import('../../components/earth'));
const HomePage = () => {
  return (
    <SmoothScroll>
      <div className={style.home}>
        <Canvas>
          <Earth />
        </Canvas>
      </div>
    </SmoothScroll>
  )
}

export default HomePage