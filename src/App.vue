<template>
  <SideBar/>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import SideBar from './components/SideBar.vue'


export default {
  name: 'App',
  components: {
    SideBar,

    
  }
}
</script>

<style>
ul{
  margin-top:0px;
  margin-bottom:0px;
}
h1{
  margin-top:0px;
  margin-bottom:0px;
}
body{
  margin:0px;
  padding:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
