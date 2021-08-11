import React, { Fragment } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { GlobalStyle } from "./theme/GlobalStyle"

import Topics from "./components/Topics"
import Topic from "./components/Topic"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Link to="/topic">
              <Topics />
            </Link>
          </Route>
          <Route exact path="/topic">
            <Topic />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
