import React from "react"
import styled from "styled-components"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"
import { FlexStyleSpaceBetween } from "../theme/GlobalStyle"

const TopicStyle = styled.div`
  margin-top: 2px;
  padding: 1em;
  background-color: #fff;
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

const TopicCreatorStyle = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1em;
`

const TopicTitleStyle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 1em;
`
function Topics() {
  return (
    <TopicStyle>
      <TopicCreatorStyle>I_AM_THE_CREATOR</TopicCreatorStyle>
      <TopicTitleStyle>
        WeekEnd Stupid Questions Thread - 07 August 2021
      </TopicTitleStyle>
      <FlexStyleSpaceBetween>
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
        <FlexStyleSpaceBetween>Share</FlexStyleSpaceBetween>
      </FlexStyleSpaceBetween>
    </TopicStyle>
  )
}
export default Topics