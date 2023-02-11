<script>
export default {
  data() {
    return {
      grayscale: false,
      filterReset: true,
      filterGratuito: false,
    };
  },
};
</script>
<script setup>
import { ref } from "vue";
const url = "http://localhost:3000/cards";
const cards = ref([]);

let cardsFilter = ref();
let cardsFilterLen = ref();

async function getCards() {
  const response = await fetch(url);
  const data = await response.json();
  cards.value = data;
  console.log(cards.value[0].imagen);
}

await getCards();
filtroReset();
function filtroReset() {
  cardsFilter.value = cards.value.filter((element) => element);
  cardsFilterLen = cardsFilter.value.lenght;
}
function filtroPrueba() {
  cardsFilter.value = cards.value.filter((element) => element.premium == false);
  console.log(cardsFilter);
}
</script>
<template>
  <main class="animate__animated animate__slideInUp">
    <div class="flex flex-col text-center place-items-center font-extralight w-full py-7">
      <div
        class="text-center mt-[6rem] mb-[6rem] bg-[#ffffff00] border-[1px] border-[#c5c5c549] shadow-xl shadow-black/25 p-7 w-[60rem] h-[8rem] rounded"
      >
        <h1 class="text-6xl text-[#db811a] font-medium">CURSOS</h1>
      </div>
      <div class="my-10">
        <button
          @click="
            filtroReset();
            filterReset = true;
            filterGratuito = false;
          "
          :class="{ 'border-b-[1px]': filterReset }"
          class="font-light border-[#db811a] h-10 w-32"
        >
          Todas
        </button>
        <button
          @click="
            filtroPrueba();
            filterReset = false;
            filterGratuito = true;
          "
          :class="{
            'border-b': filterGratuito,
          }"
          class="font-light border-[#db811a] h-10 w-32"
        >
          Gratuitas
        </button>
      </div>
      <hr class="w-1/2 h-[1px] border-0 rounded md:my-3 bg-[#969494]" />
    </div>
    <ul
      :class="{
        'animate__animated animate__fadeIn': filterReset,
        'animate__animated animate__slideInUp': filterGratuito,
      }"
      class="place-items-center flex flex-col flex-wrap mt-[6rem] xl:mx-56 xl:my-10 xl:h-[60rem] my-5"
    >
      <li v-for="card in cardsFilter">
        <div
          id="body"
          :class="{ grayscale: grayscale }"
          class="group relative m-4 shadow-xl justify-center group [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] xl:flex"
        >
          <div
            class="rounded border-[1px] border-[#30475D] bg-[white] w-[250px] h-[400px]"
          >
            <a href="#!">
              <img class="rounded-t w-[250px]" :src="card.imagen" alt="" />
            </a>

            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{{ card.nombre }}</h5>
              <p class="text-gray-700 text-base mb-4 h-[5rem]">
                {{ card.descripcion }}
              </p>
              <button
                type="button"
                class="w-28 inline-block flex-end px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                ENTRAR
              </button>
            </div>
          </div>
          <div
            class="absolute rounded transition-all duration-700 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)] border-2 border-[#30475D] bg-[white] w-[250px] h-[400px]"
          >
            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{{ card.nombre }}</h5>
              <p class="text-gray-700 text-base mb-4 h-[5rem]">
                {{ card.descripcion }}
              </p>
              <button
                type="button"
                class="w-28 inline-block flex-end px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
