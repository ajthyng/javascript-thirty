import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 2px solid ${props => (props.active ? 'orange' : '#000000')};
  border-radius: 10px;
  background-color: rgba(100, 100, 100, 0.6);
  box-shadow: 0 0 ${props => (props.active ? '10px' : '0')} orange;
  margin: 5px;

  transform: scale(${props => (props.active ? 1.1 : 1.0)});
  cursor: pointer;
`

const KeyLabel = styled.span`
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  flex: 1;
`

const Sound = styled.div`
  color: yellow;
  font-size: 10px;
  text-transform: uppercase;
  margin: 5px;
  user-select: none;
`

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const Audio = styled.audio``

class Drum extends Component {
  state = {
    active: false
  }

  handleKeydown = event => {
    const { activeKey } = this.props
    const { active } = this.state
    if (event.key.toUpperCase() === activeKey.toUpperCase()) {
      event.preventDefault()
      if (this.audio) this.audio.currentTime = 0
      this.audio && this.audio.play()
      this.setState({ active: true })
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  componentDidUpdate () {
    const { active } = this.state
    if (active) {
      setTimeout(() => this.setState({ active: false }), 70)
    }
  }

  render () {
    const { activeKey, label } = this.props
    const { active } = this.state
    return (
      <Container
        active={active}
        onClick={() =>
          this.handleKeydown({
            key: activeKey,
            preventDefault: () => null
          })}
      >
        <Labels>
          <KeyLabel>{activeKey}</KeyLabel>
          <Sound>{label}</Sound>
          <Audio
            type='audio/wav'
            src={`sounds/${label.toLowerCase()}.wav`}
            innerRef={c => (this.audio = c)}
          />
        </Labels>
      </Container>
    )
  }
}

export default Drum
