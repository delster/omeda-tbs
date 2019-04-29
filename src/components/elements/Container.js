import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledContainer = styled.div`
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container