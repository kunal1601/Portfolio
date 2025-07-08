import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#ff6bcb', '#47e6fb', '#f9f871', '#a685e2', '#ffb86c', '#8be9fd'] },
          shape: { type: 'circle' },
          opacity: { value: 0.7, random: true },
          size: { value: 3, random: true },
          links: {
            enable: true,
            distance: 150,
            color: '#a685e2',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground; 