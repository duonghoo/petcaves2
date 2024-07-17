<template>
  <div>
    <ul>
        <h1>CMS</h1>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/post">Post</router-link></li>
        <li>Page</li>
        <li>Product</li>
        <li>Redirect</li>
    </ul>
  </div>
</template>

<script>
    export default {
    name: 'SideBar'
    }
</script>

<style scoped>
    div {
        position: relative;
        background: #000;
        color: aliceblue;
        left: 0;
        height: 100vh;
        width: 200px;
    }
    div > ul {
        margin-top: 0px;
        margin-left: 15px;
        margin-right: 15px;
    }
    div > ul > li {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid white;
    }
</style>

