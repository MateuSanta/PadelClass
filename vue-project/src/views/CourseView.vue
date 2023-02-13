<script>
export default {
  data() {
    return {
      grayscale: false,
      filterReset: true,
      filterGratuito: false,
      nivelIniciacion: false,
      nivelIntermedio:false,
      nivelAvanzado:false
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

function filtroIniciacion() {
  filtroReset();
  cardsFilter.value = cards.value.filter((element) => element.nivel == "Iniciación");
  console.log(cardsFilter);
}
function filtroIntermedio() {
  filtroReset();
  cardsFilter.value = cards.value.filter((element) => element.nivel == "Intermedio");
  console.log(cardsFilter);
}
function filtroAvanzado() {
  filtroReset();
  cardsFilter.value = cards.value.filter((element) => element.nivel == "Avanzado");
  console.log(cardsFilter);
}
</script>
<template>
  <main class="  flex flex-col place-items-center animate__animated animate__slideInUp">
    <div class="flex flex-col   font-extralight w-full py-0">
      <div
        class=" bg-slate-100  w-[30rem] flex place-self-center justify-center text-center mt-[6rem] mb-[6rem]  border-[1px] border-[#c5c5c549] shadow-xl shadow-black/25 p-7 xl:w-[60rem] h-[8rem] rounded-xl ">
        <h1 class="text-6xl text-[#d18407] font-medium">Courses</h1>
      </div>

      <h1 class="text-4xl text-center mt-24 text-[#30475D] font-lg">Escoge tu nivel: </h1>

      <div class="flex flex-col xl:flex-row place-self-center mt-[6rem] justify-center w-[300px] h-[600px] xl:h-[300px] ">
        <div class="flex  my-5 mx-10 items-start h-32  xl:w-[20rem] ">
          <div :class="{ 'scale-125': nivelIniciacion,'shadow-[#2f4355]':nivelIniciacion,'contrast-125':nivelIniciacion }"
            class=" flex  object-cover w-[200px] duration-300 hover:w-[300px] hover:shadow-[#2f4355] hover:contrast-125 flex-grow relative items-center justify-center cursor-pointer  hover:scale-110 transition-all  text-[#2f4355] h-[8rem]  rounded-xl shadow-xl bg-slate-200">
            <button @click="filtroIniciacion(); 
            filterReset = false;
            filterGratuito = false;
                          nivelIniciacion= true;
                          nivelIntermedio=false;
                          nivelAvanzado=false;
            " class="font-medium opacity-70 p-10 hover:opacity-100  text-3xl">Iniciación
            </button  >
          </div>
        </div>
        <div class="flex my-5 h-32 mx-10 xl:w-[20rem] ">
          <div :class="{ 'scale-125': nivelIntermedio,'shadow-[#db811a]':nivelIntermedio,'contrast-125':nivelIntermedio }"
            class=" flex   object-cover w-[200px] duration-300 hover:w-[300px] hover:shadow-[#db811a] hover:contrast-125 flex-grow relative items-center justify-center cursor-pointer  hover:scale-110 transition-all  text-[#db811a] h-[8rem]  rounded-xl shadow-xl bg-slate-400">
            <button @click="filtroIntermedio();
            filterReset = false;
            filterGratuito = false;
                          nivelIniciacion= false;
                          nivelIntermedio=true;
                          nivelAvanzado=false;
            
            " class="font-medium opacity-70  p-10 hover:opacity-100  text-3xl">Intermedio</button  >
          </div>
        </div>

        <div class="flex my-5  mx-10 justify-center   h-32  xl:w-[20rem] ">
          <div :class="{ 'scale-125': nivelAvanzado,'shadow-[#ca1d51]':nivelAvanzado,'contrast-125':nivelAvanzado }"
            class=" flex   object-cover w-[200px] duration-300 hover:w-[300px] hover:contrast-125 flex-grow relative items-center justify-center cursor-pointer hover:shadow-[#ca1d51] hover:scale-110 transition-all  text-[#db811a] h-[8rem]  rounded-xl shadow-xl bg-slate-700">
            <button @click="filtroAvanzado();
            filterReset = false;
            filterGratuito = false;
                          nivelIniciacion= false;
                          nivelIntermedio=false;
                          nivelAvanzado=true;
                    
                      "  class="text-[#ca1d51] rounded-xl p-10 opacity-70 hover:opacity-100  font-medium  text-3xl">Avanzado</button  >
          </div>
        </div>
      </div>
    
      <div class=" flex place-items-center justify-center mb-5 w-full">
        <button @click="
                      filtroReset();
                      
                      filterReset = true;
                      filterGratuito = false;
                      nivelIniciacion= false;
                      nivelIntermedio=false;
                      nivelAvanzado=false;
                            " :class="{ 'border-b-[1px]': filterReset }" class="  font-light border-[#db811a] h-10 w-32">
                              Todas
                </button>
                <button @click="
                    filtroPrueba();
                    filterReset = false;
                    filterGratuito = true;
                    nivelIniciacion= false;
                      nivelIntermedio=false;
                      nivelAvanzado=false;
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
        <div id="body" :class="{ 'shadow-[#ca1d51]':nivelAvanzado,'shadow-[#cb9f64]':nivelIntermedio,'shadow-[#2f4355]':nivelIniciacion,'shadow-[#374755]':filterReset,'shadow-[#57b570]':filterGratuito }" 
          class=" text-center relative m-4 shadow-lg justify-center  xl:flex">
          <div class="rounded  border-[#30475D] bg-[white] w-[250px] h-[400px]">
            <a href="#!">
              <img class="rounded-t w-[250px]" :src="card.imagen" alt="" />
            </a>

            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{{ card.nombre }}</h5>
              <p class="text-gray-700 text-base mb-4 h-[7rem]">
                {{ card.descripcion }}
              </p>
              <button type="button"
                class="w-28 inline-block flex-end px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#db811a] hover:shadow-lg focus:bg-[#db811a] focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
                ENTRAR
              </button>
            </div>
          </div>

        </div>
      </li>
    </ul>
  </main>
</template>
