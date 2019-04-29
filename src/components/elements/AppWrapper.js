import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledAppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const AppWrapper = ({ children }) => <StyledAppWrapper>{children}</StyledAppWrapper>

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppWrapper