<template>
  <nav id="nav">
    <router-link to="/home">Home</router-link>
    <route-view/>
  </nav>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>base url</h1>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {  
    msg: String,
      },
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
