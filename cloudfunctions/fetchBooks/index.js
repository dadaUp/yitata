// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (dataBaseName = "books", skipNumber = 0, needNumber = 20) => {
  const books = db.collection(dataBaseName).skip(skipNumber).limit(needNumber).get()
  return {
    books: books
  }
}