import React from "react"
import { Textarea, Button, Box } from "@chakra-ui/react"

function AddComment() {
  return (
    <Box px={3} py={5}>
      <Textarea
        style={{ width: "98%", border: "1px solid #999999", padding: "1%" }}
        rows={2}
        size="sm"
        placeholder="Add Comment"
        mb={3}
      />
      <Button colorScheme="blue" size="md">
        Submit
      </Button>
    </Box>
  )
}

export default AddComment
