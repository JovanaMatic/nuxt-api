import { db } from '../../db/index'

export default defineEventHandler((e) => {
  const method = e.node.req.method

  if (method === "GET") {
    console.log("GET")
    console.log(db.todos)
  }

  if (method === "POST") {
    console.log("POST")
    return db.todos
  }
})