import express, { Request, Response } from "express"
import { MongoClient, Db } from "mongodb"
import MongoDb from "./MongoDbInit"
import cors from "cors"
import TopicRepo from "./database/repository/TopicRepo"

const app = express()
app.use(cors())
const port = 8080

let db: Db

app.get("/", (req: Request, res: Response) => {
  TopicRepo.FindAllTopics(db)
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.sendStatus(404)
    })
})

app.get("/post/:post", (req: Request, res: Response) => {
  let postId = req.params.post
  TopicRepo.FindTopic(db, { _id: postId })
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.sendStatus(404)
    })
})

MongoDb()
  .then((client) => {
    db = client
    app.listen(port, () => {
      console.log("Listening")
    })
  })
  .catch(() => console.log("ERROR"))
