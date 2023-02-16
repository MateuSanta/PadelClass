<script setup>
import router from "../router";
import { ref } from "vue";
import { useCookies } from "vue3-cookies";

let username = useCookies().cookies.get("username");
const url = "http://localhost:3000/users";
const users = ref([]);

let user = ref();

async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  users.value = data;
}

await getUsers();

function cambiarPassword() {
  var pw = form.password.value;
  var newpw = form.newpassword.value;
  let id;
  let email;
  /*   validate(pw); */
  users.value.forEach((element) => {
    if (username == element.name && pw == element.password) {
      id = element.id;
      email = element.email;
      return;
    }
  });
  let nuevoUsuario = {
    id: id,
    name: username,
    email: email,
    password: newpw,
  };
  console.log(nuevoUsuario);
  fetch(url + "/" + id, {
    method: "PATCH",
    body: JSON.stringify(nuevoUsuario),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      alert("Error al cambiar la contraseña");
    });
  alert("Usuario eliminado");
}
function eliminar() {
  let id;
  var pw = form1.password1.value;
  users.value.forEach((element) => {
    if (username == element.name && pw == element.password) {
      id = element.id;
    } else {
    }
  });

  fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      alert("Error al eliminar");
    });
}
</script>

<template>
  <section class="bg-gray-900">
    <div class="flex flex-col md:flex-row items-center justify-center px-6 py-20 mx-auto">
      <div
        class="w-full mt-10 mx-5 rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            Cambia tu contraseña
          </h1>
          <form id="form" class="space-y-4 md:space-y-6" method="patch">
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
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">
                Nueva Contraseña</label
              >
              <input
                type="password"
                name="newpassword"
                id="newpassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="button"
              @click="cambiarPassword()"
              class="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-400 hover:bg-slate-200 focus:ring-primary-800"
            >
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>

      <div
        class="w-full rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            Eliminar Cuenta
          </h1>
          <form id="form1" class="space-y-4 md:space-y-6" method="delete">
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white"
                >Contraseña</label
              >
              <input
                type="password1"
                name="password1"
                id="password1"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="button"
              @click="eliminar()"
              class="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-400 hover:bg-slate-200 focus:ring-primary-800"
            >
              Eliminar Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
