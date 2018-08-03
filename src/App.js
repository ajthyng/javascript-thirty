import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import styled from 'styled-components'
import Project from './components/Project'
import DayOne from './components/DayOne/DayOne'
import DayTwo from './components/DayTwo/DayTwo'
import DayThree from './components/DayThree/DayThree'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #232323;
  display: flex;
`

const Content = styled.div`
  display: flex;
  flex: 1;
`

class App extends Component {
  state = {
    day: <DayThree />
  }

  onClick = day => this.setState({ day: day || null })

  render () {
    return (
      <Container>
        <Sidebar onClick={this.onClick}>
          <Project name='Day One' Day={DayOne} />
          <Project name='Day Two' Day={DayTwo} />
          <Project name='Day Three' Day={DayThree} />
          <Project name='Day Four' />
          <Project name='Day Five' />
          <Project name='Day Six' />
        </Sidebar>
        <Content>
          {this.state.day}
        </Content>
      </Container>
    )
  }
}

export default App
