import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #00000080;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 5px;
`

const Label = styled.label`
  color: white;
  font-size: 16px;
  text-transform: capitalize;
`

class Input extends Component {
  componentDidMount () {
    if (this.input) {
      const { handleChange, value } = this.props
      this.input.value = value
      this.input.addEventListener('input', handleChange)
      this.input.addEventListener('change', handleChange)
    }
  }

  render () {
    const { name, min, max, type } = this.props
    return (
      <Container>
        <Label>{name}</Label>
        <input
          ref={c => (this.input = c)}
          step='any'
          min={min}
          max={max}
          type={type}
        />
      </Container>
    )
  }
}

export default Input
