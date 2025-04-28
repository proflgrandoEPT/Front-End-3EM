<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>

    <input
      type="text"
      v-model="newTask"
      placeholder="Adicione uma nova tarefa"
    />

    <button @click="addTask">Adicionar Tarefa</button>

    <p v-if="tasks.length === 0">Nenhuma tarefa adicionada.</p>

    <ul v-else>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <span @click="toggleTaskStatus(index)">
          {{ task.text }}
        </span>

        <button @click="removeTask(index)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          text: this.newTask,
          completed: false
        });
        this.newTask = '';
      }
    },
    toggleTaskStatus(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #c0392b;
}
</style>
