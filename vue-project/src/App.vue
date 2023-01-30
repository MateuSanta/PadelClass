<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue'
import Footer from './components/Footer.vue'



</script>

<template>
  <header >
    <Header></Header>
    <Modal></Modal>
  </header>
  <main >
    <HomeView></HomeView>
    <Footer></Footer>
  </main>
</template>

