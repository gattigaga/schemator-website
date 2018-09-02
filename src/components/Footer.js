import React from 'react'
import styled from 'styled-components'
import 'typeface-roboto'

const Container = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
`

const Text = styled.p`
  font-size: 14px;
  font-family: Roboto;
  text-align: center;
  color: white;
`

const Heart = styled.span`
  color: #eb4d4b;
  font-size: 18px;
`

const Link = styled.a`
  color: white;
`

const Footer = () => (
  <Container>
    <Text>
      Made with <Heart>♥</Heart> by{' '}
      <Link href="https://twitter.com/gattigaga">@gattigaga</Link>
    </Text>
  </Container>
)

export default Footer
