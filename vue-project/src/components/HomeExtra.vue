<template>
  <div
    class="flex flex-col place-items-center p-16 place-content-center xl:flex-row bg-[#30475D] bg-gradient-to-br from-[#18212A]"
  >
    <div class="grid grid-cols-4 grid-rows-3 h-[15rem] w-[21rem] m-20">
      <div
        class="col-start-1 col-end-2 row-start-1 row-end-4 border-b-4 border-l-4 border-[#db811a]"
      ></div>
      <div
        class="flex flex-col row-start-1 col-start-2 row-end-4 col-end-4 border-[#db811a]"
      >
        <p class="text-white text-center text-2xl mt-12">
          Cursos de nivel
          <span class="inline-block text-slate-400 text-xl mt-2 p-2"> INICIACIÓN</span>
        </p>

        <router-link
          class="mt-[4rem] bottom-0 text-center text-[#db811a]"
          :to="{ path: '/course' }"
        >
          VER MÁS</router-link
        >
      </div>
      <div
        class="row-start-1 col-start-4 row-end-4 col-end-5 border-b-4 border-r-4 border-[#db811a]"
      ></div>
    </div>
    <div class="grid grid-cols-4 grid-rows-3 h-[15rem] w-[21rem] m-20">
      <div
        class="col-start-1 col-end-2 row-start-1 row-end-4 border-b-4 border-l-4 border-[#db811a]"
      ></div>
      <div
        class="flex flex-col row-start-1 col-start-2 row-end-4 col-end-4 border-[#db811a]"
      >
        <p class="text-white text-center text-2xl mt-12">
          Cursos de nivel
          <span class="inline-block text-[#b4742a] text-xl mt-2 p-2"> INTERMEDIO</span>
        </p>

        <router-link
          class="mt-[4rem] bottom-0 text-center text-[#db811a]"
          :to="{ path: '/course' }"
        >
          VER MÁS</router-link
        >
      </div>
      <div
        class="row-start-1 col-start-4 row-end-4 col-end-5 border-b-4 border-r-4 border-[#db811a]"
      ></div>
    </div>
    <div class="grid grid-cols-4 grid-rows-3 h-[15rem] w-[21rem] m-20">
      <div
        class="col-start-1 col-end-2 row-start-1 row-end-4 border-b-4 border-l-4 border-[#db811a]"
      ></div>
      <div
        class="flex flex-col row-start-1 col-start-2 row-end-4 col-end-4 border-[#db811a]"
      >
        <p class="text-white text-center text-2xl mt-12">
          Cursos de nivel
          <span class="inline-block text-[#ca1d51] bg-slate-200 text-xl rounded mt-2 p-2"
            >AVANZADO</span
          >
        </p>

        <router-link
          class="mt-[4rem] bottom-0 text-center text-[#db811a]"
          :to="{ path: '/course' }"
        >
          VER MÁS</router-link
        >
      </div>
      <div
        class="row-start-1 col-start-4 row-end-4 col-end-5 border-b-4 border-r-4 border-[#db811a]"
      ></div>
    </div>
  </div>
</template>
