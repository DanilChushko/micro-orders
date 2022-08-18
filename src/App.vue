<template>
  <div id="app">
    <h2>Заказы</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  inject: ['sessionService'],
  created() {
    if (this.sessionService.isAuthenticated) {
      alert('Вы авторизованы')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  height: 500px;
  border: 3px dashed green;
  background-color: #c7d4ca;
}
</style>
