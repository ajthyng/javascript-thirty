import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.active ? 5 : 1)};
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  overflow: hidden;
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition:
    font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundImage});

  text-transform: uppercase;
  font-family: 'Amatic SC', cursive;
  text-shadow:0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;

  *:first-child {
    transform: ${props => (props.active ? '' : 'translateY(-100%)')};
  }

  *:last-child {
    transform: ${props => (props.active ? '' : 'translateY(100%)')};
  }
`

const Paragraph = styled.div`
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Panel = ({ slogan, backgroundImage, active, onClick }) => {
  const sloganArray = slogan.split(' ')
  const first = sloganArray[0]
  const second = sloganArray[1]
  const rest = sloganArray.slice(2).join(' ')
  return (
    <Container
      onClick={onClick}
      active={active}
      backgroundImage={backgroundImage}
    >
      <Paragraph>{first}</Paragraph>
      <Paragraph>{second}</Paragraph>
      <Paragraph>{rest}</Paragraph>
    </Container>
  )
}

Panel.defaultProps = {
  active: false,
  backgroundImage: 'https://images.unsplash.com/photo-1533468432434-200de3b5d528?fit=crop&w=1500&h=1500&q=100'
}

export default Panel
