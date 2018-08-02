import React, { Component } from 'react'
import styled from 'styled-components'
import Hand from './Hand'

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 15px solid white;
  margin: 5px;
  background-color: #ffffffA0;
`

const Hour = Hand
const Minute = Hand
const Second = Hand

const makePositions = time => ({
  sec: time.getSeconds(),
  min: time.getMinutes() + time.getSeconds() / 60,
  hour: time.getHours() % 12 +
    time.getMinutes() / 60 +
    time.getSeconds() / 3600
})

class Face extends Component {
  constructor (props) {
    super(props)
    this.state = makePositions(new Date())
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.setState(makePositions(new Date())),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { sec, min, hour } = this.state
    return (
      <Container>
        <Hour rotate={hour * 30} length='40%' />
        <Minute rotate={min * 6} />
        <Second rotate={sec * 6} width={3} color='red' />
      </Container>
    )
  }
}

export default Face
