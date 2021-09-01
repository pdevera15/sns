import React, { useEffect, useState } from "react"
import { TopicsIf } from "../interface/topicIf"
import AddComment from "./AddComment"
import Comments from "./Comments"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"
import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react"

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
    <Box p={1}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Box>
            <Text fontSize="xs">{topic.creator}</Text>
          </Box>
          <Box my={3}>
            <Text fontSize="3xl" fontWeight="semi-bold">
              {topic.title}
            </Text>
          </Box>
          <Box mb={5}>
            <Text fontSize="md">{topic.text}</Text>
          </Box>
          <Flex alignItems="center" mb={5}>
            <Box display="flex">
              <Box
                p={2}
                border={"1px solid #efefed"}
                borderRadius={16}
                w={90}
                mr={15}
              >
                <Flex alignItems="center">
                  <CgArrowUpO size={18} color={"#787c7e"} /> <Spacer />6
                  <Spacer />
                  <CgArrowDownO size={18} color={"#787c7e"} />
                </Flex>
              </Box>
              <Box
                diplay={"flex"}
                p={2}
                border={"1px solid #efefed"}
                borderRadius={16}
                w={90}
              >
                <Flex alignItems="center">
                  63
                  <Spacer />
                  <CgComment size={18} color={"#787c7e"} />
                </Flex>
              </Box>
            </Box>
            <Spacer />
            Share
          </Flex>
          <Divider />
          <AddComment />
          <Comments />
        </div>
      )}
    </Box>
  )
}

export default Topic
