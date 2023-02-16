<script setup>

</script>
<script>
  import Home from '../components/Home.vue'
  import Lessons from '../components/HomeLessons.vue'
  import Card from '../components/Card.vue'
  import Extra from '../components/HomeExtra.vue'
  import Register from '../components/HomeRegister.vue'

  export default {
    components: {
      Home,
      Lessons,
      Card,
      Extra,
      Register
    },
  };
</script>

<template>
  <body bg-slate-100>
    <Home></Home>
    <Lessons></Lessons>
    <Card></Card>
    <Extra></Extra>
    <Register></Register>
  </body>
</template>
