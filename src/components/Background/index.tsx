import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

const Wrapper = styled(animated.div)`
  position: absolute;
  background-color: #fff;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
`

const Background = (): JSX.Element => {
  const animation = useSpring({config: config.default, opacity: 1, from: { opacity: 0 }})
  return (
    <Wrapper style={animation}>
      <StyledParticles params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: '#81ecec'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#81ecec'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: true
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: '#81ecec',
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
      />
    </Wrapper>
  )
}

export default Background
