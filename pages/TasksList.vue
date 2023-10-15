<template>
  <div class="container">
    <div>
      <h1 class="title-task-list">Task Planner</h1>
      <section class="tasks-list">
        <TodoList />

        <section class="create-task-list">
          <TodoInput />
        </section>
      </section>
    </div>
  </div>
</template>
  
  <script>
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: { TodoList, TodoInput },
  async fetch({ store }) {
    await store.dispatch("todos/setTodos");
  },
};
</script>

  