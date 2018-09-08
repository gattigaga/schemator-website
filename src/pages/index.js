import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import 'typeface-roboto'

import imgMain from '../assets/images/main.png'
import Button from '../components/Button'
import HighlightFeature from '../components/HighlightFeature'

const Container = styled.div`
  width: 100%;
`

const Jumbotron = styled.div`
  width: 100%;
  background: #eb4d4b;
  padding: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 24px 6%;
  }
`

const Title = styled.h1`
  font-size: 10vw;
  font-family: Roboto;
  color: white;
  margin: 0px;
  text-align: center;
  margin-top: 64px;

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 6vw;
  }
`

const Tagline = styled.p`
  font-size: 4vw;
  font-family: Roboto;
  color: white;
  margin: 0px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 2vw;
  }
`

const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 32px;
`

const DocText = styled(Link)`
  font-size: 16px;
  font-family: Roboto;
  color: white;
  margin: 0px;
  margin-right: 24px;
  text-decoration: none;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: 48px;

  @media screen and (min-width: 640px) {
    width: 577px;
    align-self: center;
  }
`

const StyledButton = styled(Button)`
  margin: auto;
  margin-top: 32px;

  @media screen and (min-width: 1024px) {
    margin-left: 0px;
  }
`

const Platform = styled.p`
  font-size: 12px;
  font-family: Roboto;
  text-align: center;
  color: #ad202a;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 6%;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const IndexPage = () => (
  <Container>
    <Jumbotron>
      <MenuWrapper>
        <DocText to="#">Documentation</DocText>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=gattigaga&repo=schemator&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="96px"
          height="20px"
        />
      </MenuWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>Schemator</Title>
          <Tagline>Create simple scheme easily.</Tagline>
          <StyledButton
            caption="Download"
            href="https://github.com/gattigaga/schemator/releases/tag/v2.0.0"
          />
          <Platform>Windows, Linux, and Mac</Platform>
        </TitleWrapper>
        <Image src={imgMain} />
      </ContentWrapper>
    </Jumbotron>
    <FeatureWrapper>
      <HighlightFeature
        title="Easy to use"
        description="The UI are so simple and not clutered which make Schemator is easy to use."
      />
      <HighlightFeature
        title="Able to export"
        description="Create a scheme and export it into the text files."
      />
      <HighlightFeature
        title="Rule it with your own plugin"
        description="Define your own field types, set how relations between tables created, and export to your own text file format."
      />
    </FeatureWrapper>
  </Container>
)

export default IndexPage
