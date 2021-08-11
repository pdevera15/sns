const mongodb = require("./mongodb")
const topicdao = require("../server/database/topicdao")
const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  try {
    mongodb()
      .then((client) => {
        topicdao.injectdb(client)
      })
      .then(() => {
        res.send(topicdao.selectAllTopics)
      })
  } catch (e) {}
})

app.listen(port, () => {
  console.log("Listening")
})
