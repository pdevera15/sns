import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        background-color: #BEC7C7;
    }
    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: #000
    }
`

const FlexStyleSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export { GlobalStyle, FlexStyleSpaceBetween }
