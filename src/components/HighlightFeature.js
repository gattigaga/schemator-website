import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'typeface-roboto'

const Container = styled.div`
  width: 100%;
  padding: 16px 0px;
  box-sizing: border-box;
  word-wrap: break-word;

  @media screen and (min-width: 760px) {
    width: 30%;
  }
`

const Title = styled.h2`
  font-family: Roboto;
  font-size: 26px;
  color: #eb4d4b;
  line-height: 36px;
  text-align: center;

  @media screen and (min-width: 760px) {
    text-align: left;
  }
`

const Description = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #555;
  line-height: 28px;
  text-align: center;

  @media screen and (min-width: 760px) {
    text-align: left;
  }
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
