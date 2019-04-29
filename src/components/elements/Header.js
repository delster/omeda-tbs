import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "./Container"

const StyledHeader = styled.header`
  & > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const LogoPlaceholder = styled.div``
const PrimaryNavPlaceholder = styled.div``

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <LogoPlaceholder>
        <Link to="/">{siteTitle} Logo Here</Link>
      </LogoPlaceholder>
      <PrimaryNavPlaceholder>
        Primary Nav Placeholder
      </PrimaryNavPlaceholder>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
