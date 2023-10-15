<template>
  <div class="container">
    <Homepage />
  </div>
</template>

<script>
import Homepage from "@/components/Homepage";

export default {
  components: { Homepage },
  async fetch({ store }) {
    await store.dispatch("todos/setTodos");
  },
};
</script>

