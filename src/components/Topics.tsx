import React from "react"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"
import { FlexStyleSpaceBetween, StatusStyle } from "../theme/GlobalStyle"

// Importing Style
import { TopicStyle, TopicCreatorStyle, TopicTitleStyle } from "./Topics-style"

// Interface @ts-ignore
import { TopicsIfProps } from "../interface/topicIf"

function Topics({ topic }: TopicsIfProps) {
  return (
    <TopicStyle>
      <TopicCreatorStyle>{topic.creator}</TopicCreatorStyle>
      <TopicTitleStyle>{topic.title}</TopicTitleStyle>
      <FlexStyleSpaceBetween>
        <FlexStyleSpaceBetween>
          <StatusStyle>
            <CgArrowUpO size={18} color={"#787c7e"} /> 6
            <CgArrowDownO size={18} color={"#787c7e"} />
          </StatusStyle>
        </FlexStyleSpaceBetween>
        <FlexStyleSpaceBetween>Share</FlexStyleSpaceBetween>
      </FlexStyleSpaceBetween>
    </TopicStyle>
  )
}
export default Topics
