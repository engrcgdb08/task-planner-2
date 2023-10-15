<template>
  <div>
    <div class="center-homepage">
      <h1 class="landing-title-landing">Welcome to Task Planner</h1>
      <span class="sub-title-homepage">
        Get things done with your day, a list that <br />refreshes every day.
      </span>
    </div>

    <section class="create-homepage">
      <TodoInput />
    </section>
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput.vue";

export default {
  components: { TodoInput },
  async fetch({ store }) {
    await store.dispatch("todos/setTodos");
  },
};
</script>

