<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-size: .80em;
  font-family: "HelveticaNeue","LucidaGrande","SegoeUI",Arial, Helvetica, Verdana, sans-serif;
  color: #696969;
  background-color:rgb(151, 223, 185);
  margin:0 auto;
  padding:0;
  height: 100%;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
