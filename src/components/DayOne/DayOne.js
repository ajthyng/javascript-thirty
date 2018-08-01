import React from 'react'
import styled from 'styled-components'
import LedZeppelin from '../../img/led_zeppelin.jpg'
import Drums from './Drums'

const Container = styled.div`
  background-color: transparent;
  background-image: url(${LedZeppelin});
  background-size: cover;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  background-color: #232323;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 250px;
  right: 0;
  position: absolute;
  z-index: 0;
`

const Content = styled.div`
  dispay: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const DayOne = props => (
  <Container>
    <Content>
      <Drums />
    </Content>
    <Overlay />
  </Container>
)

export default DayOne
