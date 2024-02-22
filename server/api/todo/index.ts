import { db } from '../../db/index'

export default defineEventHandler(async (e) => {
  const method = e.req.method

  if (method === "GET") {
    return db.todos
  }
  
  if (method === "POST") {
    const body = await readBody(e)
    console.log({ body })

    if (!body.item) throw new Error

    const newTodo = {
      id: new Date(),
      item: body.item,
      completed: false
    }
    db.todos.push(newTodo)
  }
})