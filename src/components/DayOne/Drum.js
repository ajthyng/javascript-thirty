import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 2px solid ${props => (props.active ? 'orange' : '#000000')};
  background-color: rgba(100, 100, 100, 0.6);
  box-shadow: 0 0 ${props => (props.active ? '10px' : '0')} orange;
  margin: 5px;

  transform: scale(${props => (props.active ? 1.1 : 1.0)});
  cursor: pointer;
`

const Key = styled.span`
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  flex: 1;
`

const Sound = styled.span`
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

class Drum extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.audio = new Audio()
    this.audio.addEventListener('canplaythrough', null, false)
    this.audio.src = `sounds/${this.props.label.toLowerCase()}.wav`
  }

  handleKeydown = event => {
    const { activeKey } = this.props
    const { active } = this.state
    if (!active && event.key.toUpperCase() === activeKey.toUpperCase()) {
      event.preventDefault()
      if (this.audio) this.audio.currentTime = 0
      this.audio && this.audio.play()
      this.setState({ active: true })
    }
  }

  onClick = () => {
    const { activeKey } = this.props
    this.handleKeydown({
      key: activeKey,
      preventDefault: () => null
    })
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
      setTimeout(() => this.setState({ active: false }), 100)
    }
  }

  render () {
    const { activeKey, label } = this.props
    const { active } = this.state

    return (
      <Container active={active} onClick={this.onClick}>
        <Labels>
          <Key>{activeKey}</Key>
          <Sound>{label}</Sound>
        </Labels>
      </Container>
    )
  }
}

export default Drum
