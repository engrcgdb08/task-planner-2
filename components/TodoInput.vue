<template>
  <div>
    <div class="input-container">
      <i class="fa fa-plus icon" aria-hidden="true"></i>
      <input
        v-model="newTodo.title"
        v-on:keyup.enter="createTodo"
        type="text"
        class="add-task"
        placeholder="What's your plan for today?"
      />
    </div>
    <p class="task-description">Please <b>enter</b> to add task</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoInput",
  data() {
    return {
      isLoading: false,
      newTodo: {
        title: "",
        completed: false,
        user: 1,
      },
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    async createTodo() {
      if (this.newTodo.title.length) {
        this.isLoading = true;
        console.log($nuxt.$route.name);
        let todo = { ...this.newTodo };
        this.newTodo.title = "";
        await this.addTodo(todo);
        if ($nuxt.$route.name === "index") {
          this.$router.push({
            path: `/TasksList`,
          });
        }
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.add-task input[type="text"] {
  color: #777;
  padding: 0.25em 0.625em;
  width: 100%;
}

.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.icon {
  padding: 10px;
  background: #f3f4f7;
  color: #dddddf;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.add-task {
  width: 100%;
  padding: 10px;
  left: 50%;
  background-color: #f3f4f7;
  outline: none;
}

::placeholder {
  color: #bababa;
  opacity: 1; /* Firefox */
}

.task-description {
  font-size: 10px;
  color: #bababa;
  margin-top: -1em;
}

.task-description b {
  color: #f50237;
}
</style>
