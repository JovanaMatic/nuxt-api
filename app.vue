<script setup>
  const { data: todos } = useFetch('/api/todo')
  const todoInput = ref()

  const addTodo = async () => {
    await $fetch('/api/todo', {
      method: 'post',
      body: { item: todoInput.value }
    })
  }

  const updateTodo = async (id) => {
    await $fetch(`/api/todo/${id}`, {
      method: 'put'
    })
  }

  const deleteTodo = async (id) => {
    await $fetch(`/api/todo/${id}`, {
      method: 'delete'
    })
  }
</script>

<template>
  <div class="container">
    <UCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input placeholder="Add todo" v-model="todoInput"/>
        <UButton @click="addTodo">Add</UButton>
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
