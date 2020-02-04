import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Background from '../components/Background'
import LogoSvg from '../images/svg/logo.svg'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Logo = styled.img`
  max-width: 200px;
`

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title='Welcome' />
      <Background />
      <Content>
        <Logo src={LogoSvg} alt='logo' />
      </Content>
    </Layout>
  )
}

export default IndexPage
