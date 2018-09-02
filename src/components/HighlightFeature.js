import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'typeface-roboto'

const Container = styled.div`
  width: 100%;
  padding: 16px 32px;
  box-sizing: border-box;
`

const Title = styled.h2`
  font-family: Roboto;
  font-size: 18px;
  color: #eb4d4b;
`

const Description = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #555;
  line-height: 21px;
`

const HighlightFeature = ({ title, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

HighlightFeature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default HighlightFeature
