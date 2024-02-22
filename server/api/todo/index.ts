import { db } from '../../db/index'
import { v4 as uuid } from 'uuid'
import { createError, sendError } from 'h3'

export default defineEventHandler(async (e) => {
  const method = e.req.method

  if (method === "GET") {
    return db.todos
  }
  
  if (method === "POST") {
    const body = await readBody(e)

    if (!body.item) {
      const bodyNotFoundError = createError({
        statusCode: 400,
        statusMessage: 'Missing data in body',
        data: {} 
      })
      sendError(e, bodyNotFoundError)
    }

    const newTodo = {
      id: uuid(),
      item: body.item,
      completed: false
    }
    db.todos.push(newTodo)
    return newTodo
  }
})