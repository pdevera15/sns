"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MongoDbInit_1 = __importDefault(require("./MongoDbInit"));
const cors_1 = __importDefault(require("cors"));
const TopicRepo_1 = __importDefault(require("./database/repository/TopicRepo"));
const app = express_1.default();
app.use(cors_1.default());
const port = 8080;
let db;
app.get("/", (req, res) => {
    TopicRepo_1.default.FindAllTopics(db)
        .then((result) => {
        res.json(result);
    })
        .catch(() => {
        res.sendStatus(404);
    });
});
app.get("/post/:post", (req, res) => {
    let postId = req.params.post;
    TopicRepo_1.default.FindTopic(db, { _id: postId })
        .then((result) => {
        res.json(result);
    })
        .catch(() => {
        res.sendStatus(404);
    });
});
MongoDbInit_1.default()
    .then((client) => {
    db = client;
    app.listen(port, () => {
        console.log("Listening");
    });
})
    .catch(() => console.log("ERROR"));
