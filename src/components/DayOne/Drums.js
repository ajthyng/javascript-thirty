import React from 'react'
import styled from 'styled-components'
import Drum from './Drum'

const Container = styled.div`
  display: flex;
`

const sounds = [
  { key: 'A', label: 'CLAP' },
  { key: 'S', label: 'HIHAT' },
  { key: 'D', label: 'KICK' },
  { key: 'F', label: 'OPENHAT' },
  { key: 'G', label: 'BOOM' },
  { key: 'H', label: 'RIDE' },
  { key: 'J', label: 'SNARE' },
  { key: 'K', label: 'TOM' },
  { key: 'L', label: 'TINK' }
]

const Drums = props => (
  <Container>
    {sounds.map(({ key, label }, index) => (
      <Drum key={index.toString(10)} activeKey={key} label={label} />
    ))}
  </Container>
)

export default Drums
