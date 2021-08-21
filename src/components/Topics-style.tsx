import styled from "styled-components"

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

export { TopicStyle, StatusStyle, TopicCreatorStyle, TopicTitleStyle }
