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
let cards = ref([]);

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
  <main class=" bg-slate-300 flex flex-col place-items-center animate__animated animate__slideInUp">
    <div class="flex flex-col   font-extralight w-full py-0">
      <div
        class=" bg-[#143b62] flex place-self-center justify-center text-center mt-[6rem] mb-[6rem] bg-[#ffffff00] border-[1px] border-[#c5c5c549] shadow-xl shadow-black/25 p-7 w-[60rem] h-[8rem] rounded-xl ">
        <h1 class="text-6xl text-[#d18407] font-medium">Courses</h1>
      </div>

      <h1 class="text-4xl text-center mt-24 text-[#d18407] font-medium">Escoge tu nivel: </h1>

      <div class="flex place-self-center mt-[6rem] justify-center w-[300px] h-[300px]  ">
        <div class="flex   items-start h-32  xl:w-[20rem] ">
          <div
            class=" flex  object-cover w-[200px] duration-300 hover:w-[300px] hover:contrast-125 flex-grow relative items-center justify-center cursor-pointer  hover:scale-110 transition-all  text-[#db811a] h-[8rem]  rounded-xl shadow-xl bg-slate-200">
            <p class="font-medium  text-3xl">Iniciación</p>
          </div>
        </div>
        <div class="flex h-32  xl:w-[20rem] ">
          <div
            class=" flex   object-cover w-[200px] duration-300 hover:w-[300px] flex-grow relative items-center justify-center cursor-pointer  hover:scale-110 transition-all  text-[#db811a] h-[8rem]  rounded-xl shadow-xl bg-slate-400">
            <p class="font-medium text-3xl">Intermedio</p>
          </div>
        </div>

        <div class="flex    justify-center   h-32  xl:w-[20rem] ">
          <div
            class=" flex   object-cover w-[200px] duration-300 hover:w-[300px] flex-grow relative items-center justify-center cursor-pointer  hover:scale-110 transition-all  text-[#db811a] h-[8rem]  rounded-xl shadow-xl bg-slate-700">
            <p class="font-medium text-3xl">Avanzado</p>
          </div>
        </div>
      </div>
    
      <div class=" flex place-items-center justify-center mb-5 w-full">
        <button @click="
          filtroReset();
          filterReset = true;
          filterGratuito = false;
                " :class="{ 'border-b-[1px]': filterReset }" class="  font-light border-[#db811a] h-10 w-32">
                  Todas
                </button>
                <button @click="
          filtroPrueba();
          filterReset = false;
          filterGratuito = true;
        " :class="{
          'border-b': filterGratuito,
        }" class="font-light border-[#db811a] h-10 w-32">
          Gratuitas
        </button>
      </div>
      <hr class="flex place-self-center justify-center w-1/2 h-[1px] border-0 rounded md:my-3 bg-[#969494]" />
    </div>
    <ul :class="{
      'animate__animated animate__fadeIn': filterReset
    }"
      class=" flex flex-col place-items-center flex-wrap mt-[6rem] xl:mx-56 xl:flex-row xl:justify-center xl:w-[80rem] xl:my-10  my-5">
      <li v-for="card in cardsFilter">
        <div id="body" :class="{ grayscale: grayscale }"
          class="group relative m-4 shadow-xl justify-center group [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] xl:flex">
          <div class="rounded border-[1px] border-[#30475D] bg-[white] w-[250px] h-[400px]">
            <a href="#!">
              <img class="rounded-t w-[250px]" :src="card.imagen" alt="" />
            </a>

            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{{ card.nombre }}</h5>
              <p class="text-gray-700 text-base mb-4 h-[5rem]">
                {{ card.descripcion }}
              </p>
              <button type="button"
                class="w-28 inline-block flex-end px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                ENTRAR
              </button>
            </div>
          </div>
          <div
            class="absolute rounded transition-all duration-700 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)] border-2 border-[#30475D] bg-[white] w-[250px] h-[400px]">
            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{{ card.nombre }}</h5>
              <p class="text-gray-700 text-base mb-4 h-[5rem]">
                {{ card.descripcion }}
              </p>
              <button type="button"
                class="w-28 inline-block flex-end px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
