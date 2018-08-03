import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, var(--gradientStart) 0%, var(--gradientEnd) 100%);
`

const Image = styled.img`
  max-width: var(--imageWidth);
  display: block;
  margin: auto;
  vertical-align: middle;
  filter: blur(var(--blur));
`

const CSSVariables = styled.div`
  display: flex;
  --gradientStart: ${props => props.start};
  --gradientEnd: ${props => props.end};
  --blur: ${props => props.blur}px;
  --imageWidth: ${props => props.width}%;
`

const HorizontalContainer = styled.div`
  display: flex;
`

class DayThree extends Component {
  state = {
    start: '#207CE5',
    end: '#499BEA',
    blur: 5,
    width: 50
  }

  handleChange = key => ({ target: { value } }) => {
    this.setState({ [key]: value })
  }

  render () {
    const { gradient, blur, width, start, end } = this.state
    return (
      <CSSVariables start={start} end={end} blur={blur} width={width}>
        <Container>
          <HorizontalContainer>
            <Input
              type='range'
              name='width'
              min={0}
              max={100}
              value={width}
              handleChange={this.handleChange('width')}
            />
            <Input
              type='range'
              name='blur'
              min={0}
              max={10}
              value={blur}
              handleChange={this.handleChange('blur')}
            />
            <Input
              type='color'
              name='gradient start'
              value={start}
              handleChange={this.handleChange('start')}
            />
            <Input
              type='color'
              name='gradient end'
              value={end}
              handleChange={this.handleChange('end')}
            />
          </HorizontalContainer>
          <Image src={require('../../img/ocean_trash.jpg')} />
        </Container>
      </CSSVariables>
    )
  }
}
export default DayThree
