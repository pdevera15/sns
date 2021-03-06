import React, { Fragment, useEffect, useState } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { GlobalStyle } from "./theme/GlobalStyle"

// Components
import Topics from "./components/Topics"
import Topic from "./components/Topic"
import Header from "./components/Header"
import Hero from "./components/Hero"

import { TopicsIf } from "./interface/topicIf"

function App() {
  const [topics, setTopics] = useState<TopicsIf[] | null>(null)

  // Fetch Topic
  const fetchdata = async () => {
    await fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((topics) => {
        setTopics(topics)
      })
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Hero />
            {topics
              ? topics.map((topic, index) => (
                  <Link to={`/topic/${topic._id}`} key={index}>
                    <Topics topic={topic} />
                  </Link>
                ))
              : "Loading"}
          </Route>
          <Route exact path="/topic/:id">
            <Topic />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
