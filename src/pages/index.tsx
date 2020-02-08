import React, { useRef, useState } from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Background from '../components/Background'
import LogoSvg from '../images/svg/logo.svg'
import styled from 'styled-components'
import { useSpring, useTrail, useChain, animated, config } from 'react-spring'

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  flex-direction: column;
`

const Logo = styled(animated.img)`
  max-width: 200px;
  margin: 0;
  pointer-events: none;
`

const Subline = styled(animated.div)`
  font-family: Lexend Giga;
  font-style: italic;
  /* margin-top: 10px; */
  width: 200px;
  padding: 0 20px;
  background-color: black;
  overflow: hidden;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  pointer-events: none;
  img {
    margin: 0;
    height: 100%;
  }
`

const Menu = styled.div`
  /* margin-top: 10px; */
  width: 200px;
`

const MenuItem = styled(Subline)`
  margin: 0;
  background-color: transparent;
  font-style: normal;
  color: black;
  border: 2px solid black;
  border-top-width: 0;
  &:not(:first-child){
    margin-top: 10px;
  }
`

const IndexPage = (): JSX.Element => {
  const logoAnimationRef = useRef()
  const logoAnimation = useSpring({
    config: config.stiff,
    ref: logoAnimationRef,
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(1.5)' }
  })
  const sublineAnimationRef = useRef()
  const sublineAnimation = useSpring({
    config: config.default,
    ref: sublineAnimationRef,
    height: 40,
    marginTop: 10,
    x: 0,
    from: { height: 0, marginTop: 0 }
  })

  const menuAnimation = useSpring({
    config: config.gentle,
    delay: 700,
    height: 40,
    x: 0,
    opacity: 1,
    from: { height: 0, opacity: 0 }
  })

  const welcome = 'WELCOME_'.split('')
  const stranger = 'STRANGER'.split('')
  // const trailRef = useRef()
  const trail = useTrail(welcome.length, {
    config: { ...config.default, tension: 500, friction: 50 },
    // ref: trailRef,
    delay: 700,
    transform: 'translate3d(0,0,0)',
    from: { transform: 'translate3d(10px,40px,60px)' }
  })
  const trailSecond = useTrail(welcome.length, {
    config: { ...config.default, tension: 500, friction: 50 },
    // ref: trailRef,
    delay: 700,
    transform: 'translate3d(0,0,0)',
    from: { transform: 'translate3d(-10px,-40px,60px)' }
  })

  useChain([logoAnimationRef, sublineAnimationRef])

  return (
    <Layout>
      <Seo title='Welcome' />
      <Background />
      <Content>
        <Logo style={logoAnimation} src={LogoSvg} alt='logo' />
        <Subline style={sublineAnimation}>
          {trail.map((props, index) => <animated.div key={welcome[index]} style={props}>{welcome[index]}</animated.div>)}
        </Subline>
        <Menu>
          <MenuItem style={menuAnimation}>{trailSecond.map((props, index) => <animated.div key={stranger[index]} style={props}>{stranger[index]}</animated.div>)}</MenuItem>
          {/* <MenuItem style={menuAnimation}>SOCIAL</MenuItem> */}
        </Menu>
      </Content>
    </Layout>
  )
}

export default IndexPage
