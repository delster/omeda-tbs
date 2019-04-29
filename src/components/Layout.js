import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "normalize.css"
import "typeface-anonymous-pro"

import GlobalStyles from "./elements/GlobalStyles"

import AppWrapper from "./elements/AppWrapper"
import Header from "./elements/Header"
import Main from "./elements/Main"
import Footer from "./elements/Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppWrapper>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer />
      </AppWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
