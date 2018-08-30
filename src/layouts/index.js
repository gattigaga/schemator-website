import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import 'normalize.css'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <Container>
    <Helmet
      title="Schemator 2"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
