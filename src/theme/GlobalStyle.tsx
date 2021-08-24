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
  align-items: center;
`

const StatusStyle = styled.div`
  padding: 0.5em;
  border: 1px solid #efefed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5em;
  margin-right: 10px;
  border-radius: 16px;
`
export { GlobalStyle, FlexStyleSpaceBetween, StatusStyle }
