<script setup>
import { RouterLink } from "vue-router";
import { useCookies } from "vue3-cookies";
import { ref } from "vue";
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
console.log(componentKey.value);

let username = useCookies().cookies.get("username");
function salir() {
  useCookies().cookies.remove("username");
  location.reload();
}

console.log(username);
</script>

<template>
  <nav :key="componentKey" class="w-full bg-white border-gray-200">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  font-[Montserrat] px-4 md:px-6 py-2.5"
    >
      <router-link
        class="self-center text-xl font-[Montserrat] font-semibold whitespace-nowrap"
        :to="{ path: '/home' }"
      >
        PadelClass</router-link
      >

      <div class="flex justify-items-center space-x-2 place" v-if="username != null">
        <p class="text-[#f09f35] font-medium font-[Montserrat]">Bienvenido/a</p>
        <router-link
          class="text-slate-700 text-md font-[Montserrat] hover:underline"
          :to="{ path: '/profile' }"
        >
          {{ username }}</router-link
        >

        <button
          @click="salir()"
          class="text-sm px-5 font-[Montserrat] hover:underline text-[#8d1616]"
        >
          Salir
        </button>
      </div>
      <div v-else class="flex items-center">
        <router-link
          @click="forceRerender()"
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
