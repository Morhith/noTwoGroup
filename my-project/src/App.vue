<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/branch">分店介绍</router-link>
      <router-link to="/careSystem">新生儿</router-link>
      <router-link to="/healthCare">护理</router-link>
      <router-link to="/rehabilitation">rehabilitation</router-link>
      <router-link to="/xx">xx</router-link>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script type="es6">
import foot from './components/Hello'
export default {
  name: 'app',
  components:{
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
