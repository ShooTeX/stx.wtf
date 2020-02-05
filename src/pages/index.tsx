import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Background from '../components/Background'
import LogoSvg from '../images/svg/logo.svg'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`

const Logo = styled(animated.img)`
  max-width: 200px;
  margin: 0;
`

const IndexPage = (): JSX.Element => {
  const animation = useSpring({
    config: config.molasses,
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(1.5)' },
  })
  return (
    <Layout>
      <Seo title='Welcome' />
      <Background />
      <Content>
        <Logo style={animation} src={LogoSvg} alt='logo' />
      </Content>
    </Layout>
  )
}

export default IndexPage
