<script setup>
import { ref } from "vue";
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

function registrar() {
  var un = form.username.value;
  var mail = form.email.value;
  var pw = form.password.value;

  let nuevoUsuario = {
    name: un,
    email: mail,
    password: pw,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      console.log("Error en el Fetch:", error);
    });
}
</script>

<template>
  <section class="bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full rounded-lg shadow border md:mt-10 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            CREA TU CUENTA
          </h1>
          <form id="form" class="space-y-4 md:space-y-6" action="post">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-white"
                >Tu Usuario</label
              >
              <input
                name="username"
                id="username"
                min="3"
                class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre de usuario"
                required="yes"
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                min="5"
                class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                required
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
                class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-white"
                >Confirmar contraseña</label
              >
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-300"
                  >Acepto los
                  <a
                    class="font-medium text-primary-600 hover:underline text-primary-500"
                    href="#"
                    >Términos y servicios</a
                  ></label
                >
              </div>
            </div>
            <button
              type="button"
              @click="registrar()"
              class="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-700 focus:ring-slate-800"
            >
              Crear cuenta
            </button>
            <p class="text-sm font-light text-gray-400">Tienes ya una cuenta?</p>

            <router-link
              class="font-medium text-sm hover:underline text-white"
              :to="{ path: '/login' }"
            >
              Loguéate</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
