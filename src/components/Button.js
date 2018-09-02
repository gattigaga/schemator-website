import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'typeface-roboto'

const Container = styled.div`
  width: 128px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: white;
  display: flex;
  cursor: pointer;
`

const Caption = styled.span`
  color: #eb4d4b;
  font-size: 16px;
  font-family: Roboto;
`

const Link = styled.a`
  text-decoration: none;
`

const Button = ({ className, caption, href }) => (
  <Link href={href}>
    <Container className={className}>
      <Caption>{caption}</Caption>
    </Container>
  </Link>
)

Button.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  href: PropTypes.string,
}

export default Button
