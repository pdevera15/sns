require("dotenv").config()

const { MongoClient } = require("mongodb")

/*
 ** Setting-Up MongoDB Connection
 ** @return MongoDb Client
 */
const mongodbinit = async () => {
  // Initialize MongoDb
  const client = new MongoClient(process.env.MONGO_URI)

  try {
    // Connect To MongoDb
    await client.connect()
    return client
  } catch (error) {
    throw new Error("Cannot Connect to Database", error)
  }
}

module.exports = mongodbinit
