const { MongoClient } = require("mongodb")

const userinfoschema = async (conn) => {
  await conn.db(process.env.DB_NAME).command({
    collMod: "userinfo",
    validator: {
      $jsonSchema: {
        required: ["username", "password"],
        properties: {
          username: {
            bsonType: "string",
            description: "must be a String",
          },
          password: {
            bsonType: "string",
            description: "password must be string",
          },
        },
      },
    },
    validationLevel: "moderate",
  })
}

module.exports = userinfoschema
