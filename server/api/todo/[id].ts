import { db } from '../../db/index'
import { createError, sendError } from 'h3'

export default defineEventHandler((e) => {
  const method = e.req.method
  const { id } = e.context.params

  if (method === "PUT") {

    let index
    const todo = db.todos.find((item, i) => {
      if (item.id === id) {
        index = i
        return true
      } else {
        return false
      }
    })
     if (!todo) {
      const todoNotFoundError = createError({
        statusCode: 404,
        statusMessage: 'Todo not found',
        data: {}
      })
      sendError(e, todoNotFoundError)
     }

     const updatedTodo = {
      ...todo,
      completed: !todo.completed
     }

     db.todos[index] = updatedTodo

     return updatedTodo
  }

  if (method === "DELETE") {
    db.todos = db.todos.filter(item => item.id !== id)
    return db.todos
  }
})