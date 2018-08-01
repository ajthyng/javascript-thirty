import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 100vh;
  background-color: #363636;
  box-shadow: 2px 0 5px 0 #101010;
`

const Header = styled.div`
  height: 150px;
  width: 250px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  color: white;
  font-size: 36px;
`

const Separator = styled.div`
  height: 2px;
  width: 250px;
  background-color: #232323;
`
const Sidebar = ({ children, onClick }) => (
  <Container>
    <Header>
      <Title>JavaScript<br />30</Title>
    </Header>
    <Separator />
    {React.Children.map(children, child =>
      React.cloneElement(child, { onClick })
    )}
  </Container>
)

export default Sidebar
