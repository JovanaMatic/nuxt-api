import { db } from '../../db/index'
import { v4 as uuid } from 'uuid'

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
      id: uuid(),
      item: body.item,
      completed: false
    }
    db.todos.push(newTodo)
    return newTodo
  }
})