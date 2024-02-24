<script setup>
const todoInput = ref()
const { todos, addTodo, updateTodo, deleteTodo } = useTodos()

const handleClick = () => {
  addTodo(todoInput.value)
  todoInput.value = ''
}

</script>

<template>
  <div class="container">
    <UCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input placeholder="Add todo" v-model="todoInput"/>
        <UButton @click="handleClick">Add</UButton>
      </div>
      <UCard @click="() => updateTodo(todo.id)" class="card" v-for="todo in todos" :key="todo.id">
        <h4 :class="todo.completed ? 'complete' : null">{{ todo.item }}</h4>
        <p @click="() => deleteTodo(todo.id)">X</p>
      </UCard>
    </UCard>
  </div>
</template>

<style scoped>
  .container {
    padding: 2rem;
    margin: 0 auto;
    max-width: 50%;
  }
  .cards {
    padding: 2rem;
  }
  .add-todo {
    display: flex;
    justify-content: space-between;
  }
  input {
    outline: none;
  }
  .card {
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .complete {
    text-decoration: line-through;
  }
</style>
