<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">引用element UI中的form表单</router-link> |
      <router-link to="/about">ts基础控制栏打印展示</router-link> |
      <router-link to="/parent">vue-property-decorator</router-link> |
      <router-link to="/project">项目展示</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
