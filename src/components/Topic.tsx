import React, { useEffect, useState } from "react"
import { TopicsIf } from "../interface/topicIf"
import { Creator, Text } from "./Topic-style"

function Topic() {
  const [topic, setTopic] = useState<TopicsIf | any>(null)
  const [loading, setLoading] = useState(true)
  let id = window.location.pathname.split("/")[2]
  // fetch topic
  const fetchdata = async (_id: string) => {
    await fetch(`http://localhost:8080/post/${_id}`)
      .then((response) => response.json())
      .then((topic) => {
        setTopic(topic)
        setLoading(!loading)
      })
  }

  useEffect(() => {
    fetchdata(id)
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Creator>
            {topic.title}・{topic.date_created}
          </Creator>
          <Text>{topic.text}</Text>
        </div>
      )}
    </div>
  )
}

export default Topic
