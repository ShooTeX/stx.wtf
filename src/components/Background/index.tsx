import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  background-color: #2c3e50;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`

const Background = (): JSX.Element =>
  <Wrapper>
    <Particles />
  </Wrapper>

export default Background
