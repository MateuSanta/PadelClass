<script>
export default {
  data() {
    return {
      left: true,
      right: false,
    };
  },
};
</script>

<template>
  <div>
    <div class="flex flex-col place-self-center h-6 text-center">
      <h1 class="xl:font-semibold font-[Montserrat] h-7 my-12 text-3xl text-[#30475D]">
        NUESTROS CURSOS MÁS POPULARES
      </h1>
    </div>
  </div>
  <div class="flex relative text-center place-content-center h-[38rem] overflow-hidden">
    <div
      :class="{ 'translate-x-[50rem]': !left, 'xl:translate-x-full': !left }"
      class="flex absolute w-[20] xl:w-[120rem] duration-300 overflow-hidden place-content-center m-32 p-10"
    >
      <div class="hidden justify-center xl:flex">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img class=" " src="/public/images/card-basics.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aprende lo básico</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Este curso de iniciación te explicará las partes fundamentales del padel.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-[#203b55] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              EMPEZAR
            </button>
          </div>
        </div>
      </div>

      <div class="flex place-self-center">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] mx-20 bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img src="/public/images/card-bandeja.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Bandeja</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Aprende como y cuando usar una bandeja! Aqui te lo enseñamos.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-[#203b55] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              EMPEZAR
            </button>
          </div>
        </div>
      </div>

      <div class="justify-center hidden grayscale xl:flex">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img src="/public/images/card-tactics.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Táctica</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Aqui te enseñamos una de las partes más fundamentales del padel!
            </p>
            <button
              type="button"
              class="inline-block flex-end px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              PREMIUM
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="{ '-translate-x-full': left }"
      class="flex absolute w-[240rem] duration-300 overflow-hidden place-content-center m-32 p-10"
    >
      <div class="hidden justify-center xl:flex">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img class=" " src="/public/images/card-servicio.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Servicio</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Este curso aprende como hacer un buen servicio.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-[#203b55] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              EMPEZAR
            </button>
          </div>
        </div>
      </div>

      <div class="flex place-self-center">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] mx-20 bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img src="/public/images/card-mental.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Mental</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Aprende a concentrarte y mantenerte enfocado en el partido.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-[#203b55] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              EMPEZAR
            </button>
          </div>
        </div>
      </div>

      <div class="justify-center grayscale hidden xl:flex">
        <div
          class="rounded shadow-xl border-2 border-[#30475D] bg-white w-[300px] h-[400px]"
        >
          <a href="#!">
            <img src="/public/images/card-pared.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Pared</h5>
            <p class="text-gray-700 text-base mb-4 h-[5rem]">
              Aqui te enseñamos una de las partes más fundamentales del padel!
            </p>
            <button
              type="button"
              class="inline-block flex-end px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              PREMIUM
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Boton para slider-->

    <img
      @click="
        right = false;
        left = true;
      "
      :class="{ hidden: left }"
      class="flex absolute left-10 w-10 my-64 rounded-xl rotate-180"
      src="/public/images/next.png"
      alt=""
    />
    <img
      @click="
        left = false;
        right = true;
      "
      :class="{ hidden: !left }"
      class="flex absolute right-10 mx-auto my-64 w-10"
      src="/public/images/next.png"
      alt=""
    />
  </div>
</template>
