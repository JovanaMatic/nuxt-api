<script setup>
  const { data } = useFetch('/api/todo')
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
