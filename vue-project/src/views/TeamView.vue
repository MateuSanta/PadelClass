<script setup>


import { ref } from 'vue'
const url = "http://localhost:3000/team";
const team = ref([]);

let teamFilter = ref();


async function getTeam() {
    const response = await fetch(url)
    const data = await response.json()
    team.value = data
    console.log((team.value[0].imagen))
}

await getTeam();



</script>
<template>
    <main class="flex flex-col place-items-center  ">
        <div class="bg-slate-100 text-center mt-[6rem] mb-[6rem]  bg-[#ffffff00] border-[1px] border-[#c5c5c549] shadow-xl shadow-black/25 p-7 w-[60rem] h-[8rem] rounded  ">
            <h1 class="text-6xl  text-[#db811a] font-medium">Team</h1>
        </div>

        <div v-for="person in team" class="flex flex-col place-items-center" >
            <h1 class=" font-light text-2xl">{{person.nombre}}</h1>
            <hr class="w-[10rem] h-[1px] border-0   rounded   bg-[#969494]">
            <div class="group my-10  h-60  xl:w-[30rem] [perspective:1000px]">
                <div
                    class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <img class="h-full w-full bg rounded-xl object-cover shadow-xl shadow-black/40"
                        :src="person.imagen" alt="" />
                        <div class="absolute flex flex-col place-items-center w-10 h-10 rounded-full right-10 top-1/2 -translate-y-1/2 border-[1px] border-slate-900">
                            <i class=" pt-[0.7rem] fa-sharp fa-regular fa-plus fa-md"></i>
                        </div>


                    </div>
                    <div
                        class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold">{{person.nombre}}</h1>
                            <p class="text-base">{{person.descripcion}}</p>
                            <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">CONTACTAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>