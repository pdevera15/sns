import React from "react"
import styled from "styled-components"
import { FlexStyleSpaceBetween, StatusStyle } from "../theme/GlobalStyle"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"

const CommentContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

const CommenterStyled = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
`
const CommentStyled = styled.div``

function Comment() {
  return (
    <CommentContainerStyle>
      <CommenterStyled>Name 2m</CommenterStyled>
      <CommentStyled>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CommentStyled>
      <FlexStyleSpaceBetween>
        <StatusStyle>
          <CgArrowUpO size={18} color={"#787c7e"} /> 6
          <CgArrowDownO size={18} color={"#787c7e"} />
        </StatusStyle>
        <StatusStyle>
          <CgComment size={18} color={"#787c7e"} />
          600
        </StatusStyle>
      </FlexStyleSpaceBetween>
    </CommentContainerStyle>
  )
}

export default Comment
