<script setup>
import { ref } from "vue";
import { useCookies } from "vue3-cookies";
import router from "../router";
const url = "http://localhost:3000/users";
const users = ref([]);

let user = ref();

async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  users.value = data;
  console.log(users.value[0].name);
}

await getUsers();

function validate() {
  var un = form.username.value;
  var pw = form.password.value;

  users.value.forEach((element) => {
    if (un == element.name && pw == element.password) {
      useCookies().cookies.set("username", element.name);
      router.go(-1);
      /*       router.push({ path: "/home", params: { login: "1" } }); */
    }
  });
  alert("Error de login");
}
</script>

<template>
  <section class="bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            Loguéate con tu cuenta
          </h1>
          <form id="form" class="space-y-4 md:space-y-6" method="get">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-white"
                >Nombre</label
              >
              <input
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your username"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white"
                >Contraseña</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center">
              <a href="#" class="text-sm font-medium hover:underline text-slate-500"
                >Contraseña olvidada?</a
              >
            </div>
            <button
              type="button"
              @click="validate()"
              class="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-400 hover:bg-slate-200 focus:ring-primary-800"
            >
              Login
            </button>
            <p class="text-sm font-light text-gray-400">
              No tienes cuenta?

              <router-link
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                :to="{ path: '/signup' }"
              >
                Registrar</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
