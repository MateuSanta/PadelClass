<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue'
import HomeVideo from './components/HomeVideo.vue'


</script>

<template>
  <header >
    <Header></Header>
  </header>
  <main >
    <HomeView></HomeView>
  </main>
</template>

