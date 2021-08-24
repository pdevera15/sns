import React, { useEffect, useState } from "react"
import { TopicsIf } from "../interface/topicIf"
import { Creator, Text, TopicContainer, Title } from "./Topic-style"
import AddComment from "./AddComment"
import Comments from "./Comments"
import { FlexStyleSpaceBetween, StatusStyle } from "../theme/GlobalStyle"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"

function Topic() {
  const [topic, setTopic] = useState<TopicsIf | any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let topicId = window.location.pathname.split("/")[2]
    // fetch topic
    const fetchdata = async (_id: string) => {
      await fetch(`http://localhost:8080/post/${_id}`)
        .then((response) => response.json())
        .then((topic) => {
          setTopic(topic)
          setLoading(false)
        })
    }
    fetchdata(topicId)
  }, [])

  return (
    <TopicContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Creator>
            {topic.creator}・{topic.date_created}
          </Creator>
          <Title>{topic.title}</Title>
          <Text>{topic.text}</Text>
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
          <AddComment />
          <Comments />
        </div>
      )}
    </TopicContainer>
  )
}

export default Topic
