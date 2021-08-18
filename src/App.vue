<template>
  <div class="container">
    <div class="row row-cols-auto my-3 justify-content-center">
      <p
        class="
          fs-1
          rounded-3
          bg-success
          fw-bold
          text-uppercase
          bg-opacity-75
          p-2
          m-0
        "
      >
        ToDo Tasks Application
      </p>
    </div>

    <div class="row my-2">
      <div class="col-sm-6 p-0 m-0">
        <p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0">
          <strong>Used Tools:</strong> Vue.js 3, Bootstrap 5, Axios.js
        </p>
      </div>
    </div>

    <div class="row my-2">
      <div class="col-sm-6 p-0 m-0">
        <p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0">
          <strong>Made By:</strong> Anvar Khamidov
        </p>
      </div>
    </div>

    <todo-list></todo-list>
  </div>
  <div class="row mt-5">
    <footer></footer>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoList },
};
</script>

<style></style>
