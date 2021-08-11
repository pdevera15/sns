let topics

interface topicdaoinf {
  title: string
  creator: string
  date_created: string
}

class topicdao {
  static async injectdb(conn: any) {
    if (topics) {
      return
    }
    try {
      topics = await conn.db("sns").collection("userinfo")
    } catch (error) {
      throw new Error("Cant Access Topic")
    }
  }

  static async selectAllTopics() {
    try {
      return await topics.find()
    } catch (error) {
      throw new Error("Error Finding")
    }
  }
}
