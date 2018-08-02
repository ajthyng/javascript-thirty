import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.width}px;
  width: ${props => props.length};
  background-color: ${props => props.color};
  position: absolute;
  top: calc(50% - ${props => props.width / 2}px);
  right: 50%;
  transform-origin: 100%;
  transform: rotate(${props => props.rotate + 90}deg);
`

const Hand = ({ rotate, color, width, length }) => (
  <Container rotate={rotate} color={color} width={width} length={length} />
)

Hand.defaultProps = {
  rotate: 0,
  width: 6,
  color: 'black',
  length: '50%'
}

export default Hand
