<template>
  <div class="row mt-4 mb-4">
    <div class="col-sm-10 p-0 m-0">
      <task-item-create @add-task="addTask"></task-item-create>
    </div>
  </div>

  <div class="row my-2">
    <div class="col-sm-10 p-0 m-0">
      <error-alert
        v-if="showErrorAlert"
        :error-message="errorMessage"
        @close-alert="toggleAlert"
      ></error-alert>
    </div>
  </div>

  <div v-if="!isTasksLoading">
    <template v-for="item in getTasksComputed" :key="item.id">
      <todo-item
        :task="item"
        @delete-task="deleteTask"
        @make-task-done="makeTaskCompleted"
      ></todo-item>
    </template>
  </div>

  <spinner-large v-else></spinner-large>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import SpinnerLarge from "./SpinnerLarge.vue";
import axios from "axios";
import ErrorAlert from "./ErrorAlert.vue";
import TaskItemCreate from "./TaskItemCreate.vue";

export default {
  components: { TodoItem, SpinnerLarge, ErrorAlert, TaskItemCreate },

  data() {
    return {
      tasksList: [],
      tasksPage: 1,
      tasksLimit: 10,
      isTasksLoading: false,
      showErrorAlert: false,
      errorMessage: "Something went wrong! There is a network error!",
    };
  },

  methods: {
    async addTask(task) {
      try {
        this.toggleAlert(false);

        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          task
        );

        this.tasksList.push({ ...task, isDisabled: false });
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      }
    },

    toggleAlert(flag) {
      this.showErrorAlert = flag;
    },

    async getTasks() {
      try {
        this.isTasksLoading = true;
        this.toggleAlert(false);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?sort_by=id:desc",
          {
            params: {
              _page: this.tasksPage,
              _limit: this.tasksLimit,
            },
          }
        );

        this.tasksList = response.data;

        this.tasksList.forEach((item) => (item.isDisabled = false));
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      } finally {
        this.isTasksLoading = false;
      }
    },

    async deleteTask(id) {
      try {
        this.toggleAlert(false);

        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        this.tasksList = this.tasksList.filter((item) => item.id !== id);
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      }
    },

    async makeTaskCompleted(task) {
      try {
        this.toggleAlert(false);

        this.tasksList = this.updateTaskItemValue(task, "isDisabled", true);

        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/todos/${task.id}`,
          {
            data: {
              completed: !task.completed,
            },
          }
        );

        this.tasksList = this.updateTaskItemValue(
          task,
          "completed",
          !task.completed
        );
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      } finally {
        this.tasksList = this.updateTaskItemValue(task, "isDisabled", false);
      }
    },

    updateTaskItemValue(task, keyParameter, valueParameter) {
      return this.tasksList.map((item) =>
        item.id === task.id ? { ...item, [keyParameter]: valueParameter } : item
      );
    },
  },

  mounted() {
    this.getTasks();
  },

  computed: {
    getTasksComputed() {
      return [...this.tasksList].reverse();
    },
  },
};
</script>

<style></style>
