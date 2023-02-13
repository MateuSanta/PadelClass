<template>
  <nav class="w-full bg-white border-gray-200">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <router-link
        class="self-center text-xl font-[Montserrat] font-semibold whitespace-nowrap"
        :to="{ path: '/home' }"
      >
        PadelClass</router-link
      >

      <div class="flex items-center">
        <router-link
          class="text-slate-700 text-xs font-[Montserrat] hover:underline"
          :to="{ path: '/login' }"
        >
          Login</router-link
        >
        <router-link
          class="text-[#f09f35] text-sm px-5 font-[Montserrat] hover:underline"
          :to="{ path: '/signup' }"
        >
          Register</router-link
        >
      </div>
    </div>
  </nav>
  <nav class="flex bg-gray-800">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row text-center mt-0 space-x-8 text-sm font-medium">
          <li>
            <router-link
              class="text-white font-[Montserrat] hover:underline"
              :to="{ path: '/home' }"
            >
              Home</router-link
            >
          </li>
          <li>
            <router-link
              class="text-white font-[Montserrat] hover:underline"
              :to="{ path: '/course' }"
            >
              Cursos</router-link
            >
          </li>
          <li>
            <router-link
              class="text-white font-[Montserrat] hover:underline"
              :to="{ path: '/team' }"
            >
              Equipo</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
</script>
