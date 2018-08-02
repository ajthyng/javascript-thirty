import React from 'react'
import styled from 'styled-components'
import Face from './Face'

const Container = styled.div`

`

const Clock = props => (
  <Container>
    <Face />
  </Container>
)

export default Clock
