'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Container, ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 144,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false,
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          enable: false
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out
          },
          random: true,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      }
    }),
    [],
  );

  if (!init) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='fixed inset-0 z-2 mix-blend-color-dodge'>
      <Particles 
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}