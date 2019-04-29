import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "../elements/Container"

const StyledMain = styled.main`
  flex: 1 1 100%;
`

const Main = ({ children }) => (
  <StyledMain>
    <Container>{children}</Container>
  </StyledMain>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
