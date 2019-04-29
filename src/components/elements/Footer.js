import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
`

const Footer = () => <StyledFooter>© {new Date().getFullYear()}, Built by <a href="https://twitter.com/delster2">David Elster</a>.</StyledFooter>

export default Footer