import React, { Component } from 'react'
import styled from 'styled-components'
import Panel from './Panel'

const Container = styled.div`
  display: flex;
  background-color: white;
  flex: 1;
`

const images = [
  'https://images.unsplash.com/photo-1518022525094-218670c9b745?w=1500&q=80',
  'https://images.unsplash.com/photo-1533433459756-d87ce5fd9de1?w=1500&q=80',
  'https://images.unsplash.com/photo-1516368694098-47836cebec97?w=1500&q=80',
  'https://images.unsplash.com/photo-1502318217862-aa4e294ba657?w=1000&q=80',
  'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?w=1500&q=80'
]

const slogans = [
  "Hey Let's Dance",
  'Give Take Receive',
  'Experience It Today',
  'Give All You Can',
  'Life In The Fast Lane'
]

class DayFour extends Component {
  constructor (props) {
    super(props)
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false
    }
  }

  setActive = panel => {
    this.setState(prev => {
      const wasActive = prev[panel]
      let state = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      }
      state[panel] = !wasActive
      return state
    })
  }

  render () {
    return (
      <Container>
        <Panel
          onClick={() => this.setActive(0)}
          key={images[0]}
          active={this.state[0]}
          backgroundImage={images[0]}
          slogan={slogans[0]}
        />
        <Panel
          onClick={() => this.setActive(1)}
          key={images[1]}
          active={this.state[1]}
          backgroundImage={images[1]}
          slogan={slogans[1]}
        />
        <Panel
          onClick={() => this.setActive(2)}
          key={images[2]}
          active={this.state[2]}
          backgroundImage={images[2]}
          slogan={slogans[2]}
        />
        <Panel
          onClick={() => this.setActive(3)}
          key={images[3]}
          active={this.state[3]}
          backgroundImage={images[3]}
          slogan={slogans[3]}
        />
        <Panel
          onClick={() => this.setActive(4)}
          key={images[4]}
          active={this.state[4]}
          backgroundImage={images[4]}
          slogan={slogans[4]}
        />
      </Container>
    )
  }
}

export default DayFour
