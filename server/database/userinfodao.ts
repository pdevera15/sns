let userinfos

interface userinfoinf {
  username: string
  password: string
  created_at: string
  updated_at: string
  isdeleted: string
  email: string
}

class userinfodao {
  static async injectdb(conn: any) {
    if (userinfos) {
      return
    }
    try {
      userinfos = await conn.db(process.env.DB_NAME).collection("userinfo")
    } catch (error) {
      throw new Error("Cant Access userinfo")
    }
  }

  static async addUserinfo(userinfo: userinfoinf) {
    try {
      return await userinfos.insertOne(userinfo)
    } catch (error) {
      throw new Error("Failed Insert")
    }
  }
}

module.exports = userinfodao
