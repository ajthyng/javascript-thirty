import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(32,124,229,1) 0%, rgba(73,155,234,1) 100%);
`

const Content = styled.div`
  dispay: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const DayTwo = props => (
  <Container>
    <Content>
      <Clock />
    </Content>
  </Container>
)

export default DayTwo
