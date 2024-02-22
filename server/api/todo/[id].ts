import { db } from '../../db/index'

export default defineEventHandler((e) => {
  const method = e.req.method
  console.log(e.context.params.id)
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
    console.log(todo)
     if (!todo) throw new Error

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