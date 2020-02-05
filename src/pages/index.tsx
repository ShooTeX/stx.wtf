import React, {useRef, useState} from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Background from '../components/Background'
import LogoSvg from '../images/svg/logo.svg'
// import TwitterSvg from '../images/svg/twitter.svg'
import styled from 'styled-components'
import { useSpring, useChain, animated, config } from 'react-spring'

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
`

const SocialBar = styled(animated.div)`
  margin-top: 10px;
  width: 200px;
  background-color: black;
  overflow: hidden;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    margin: 0;
    height: 100%;
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
  const socialBarAnimationRef = useRef()
  const socialBarAnimation = useSpring({
    config: config.wobbly,
    ref: socialBarAnimationRef,
    height: 40,
    x: 0,
    from: { height: 0 }
  })

  useChain([logoAnimationRef, socialBarAnimationRef])

  return (
    <Layout>
      <Seo title='Welcome' />
      <Background />
      <Content>
        <Logo style={logoAnimation} src={LogoSvg} alt='logo' />
        <SocialBar style={socialBarAnimation}>
          {/* <img src={TwitterSvg}></img> */}
        </SocialBar>
      </Content>
    </Layout>
  )
}

export default IndexPage
