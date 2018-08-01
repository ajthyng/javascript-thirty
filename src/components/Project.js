import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #606060;
  }
`

const Label = styled.a`
  color: white;
  font-size: 18px;
  text-align: start;
  font-weight: bold;
  padding-left: 32px;
  text-transform: uppercase;
  flex: 1;
  user-select: none;
`

const renderDay = (Day, onClick) => () =>
  (Day ? onClick(<Day />) : onClick(null))

const Project = ({ name, onClick, Day }) => (
  <Container onClick={renderDay(Day, onClick)}>
    <Label>{name}</Label>
  </Container>
)

Project.defaultProps = {
  name: 'Day one',
  onClick: () => null
}

export default Project
