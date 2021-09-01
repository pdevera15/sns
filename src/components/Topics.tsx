import React from "react"
import { CgArrowUpO, CgArrowDownO, CgComment } from "react-icons/cg"
import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react"

// Interface @ts-ignore
import { TopicsIfProps } from "../interface/topicIf"

function Topics({ topic }: TopicsIfProps) {
  return (
    <Box shadow={"md"} p={4} m={10} borderRadius={5}>
      <Box>
        <Text fontSize="xs">{topic.creator}</Text>
      </Box>
      <Box my={3}>
        <Text fontSize="3xl" fontWeight="semi-bold">
          {topic.title}
        </Text>
      </Box>
      <Box>
        <Text fontSize="md">{topic.text}</Text>
      </Box>
      <Divider my={5} />
      <Flex alignItems="center">
        <Box display="flex">
          <Box
            p={2}
            border={"1px solid #efefed"}
            borderRadius={16}
            w={90}
            mr={15}
          >
            <Flex alignItems="center">
              <CgArrowUpO size={18} color={"#787c7e"} /> <Spacer />6<Spacer />
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
    </Box>
  )
}
export default Topics
