<script>
export default {
  data() {
    return {
      nivelIniciacion: false,
      nivelIntermedio: false,
      nivelAvanzado: false,
    };
  },
};
</script>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const url = "http://localhost:3000/cards";
const cards = ref([]);

let cardsFilter = ref();

async function getCards() {
  const response = await fetch(url);
  const data = await response.json();
  cards.value = data;
}

await getCards();
cardId();
function cardId() {
  cardsFilter.value = cards.value.find((card) => card.id == route.params.id);
  console.log(route.params.id);
  console.log(cardsFilter.value.id);
}
function comprobarNivel() {
  if ((cardsFilter.value[0].nivel = "Iniciación")) {
  }
}
</script>

<template>
  <main class="flex flex-col place-items-center animate__animated animate__slideInUp">
    <div class="flex flex-col place-items-center font-extralight w-full py-0">
      <div
        class="animate__animated animate__slideInUp w-[30rem] shadow-[#cb9f64] flex flex-col place-self-center justify-center text-center mt-[6rem] mb-[6rem] border-[1px] border-[#c5c5c549] shadow-xl p-7 xl:w-[60rem] h-[12rem] rounded-xl"
      >
        <h1 class="text-4xl text-[#d18407] font-medium">Bienvenido al Curso:</h1>
        <span class="text-5xl text-[#d18407] font-medium mt-4">
          {{ cardsFilter.nombre }}
        </span>
      </div>

      <div class="">
        <div
          class="text-center shadow-[#cb9f64] relative m-4 shadow-lg justify-center xl:flex"
        >
          <div class="rounded border-[#095caa] bg-[#ffffff] w-[250px] h-[400px]">
            <img class="rounded-t w-[250px]" :src="cardsFilter.imagen" alt="" />

            <div class="flex flex-col place-items-center p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {{ cardsFilter.nombre }}
              </h5>
              <p class="text-gray-700 text-base mb-4 h-[7rem]">
                {{ cardsFilter.descripcion }}
              </p>
              <div class="font-bold text-xl text-[#d18407]">
                {{ cardsFilter.nivel }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/3 rounded-xl m-10">
      <video
        controls
        src="/public/images/bandeja-video.mp4"
        class="h-auto rounded-xl"
      ></video>
    </div>
  </main>
</template>
