<template>
    <div class="flex flex-col  place-items-center  h-[50rem] w-full place-content-center ">
        <h1 class=" h-7 mb-20 font-[Montserrat] font-light text-3xl text-[#30475D]">REGISTRATE AHORA</h1>
        <!-- PASOS PARA REGISTRARSE-->

        <ol
            class=" hidden xl:flex items-center w-full px-[20rem] pb-10 text-sm font-medium text-center text-gray-400 sm:text-base">
            <li
                class="flex md:w-full items-center text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-700">
                <span
                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-500">
                    <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Tener<span class="hidden sm:inline-flex sm:ml-2">Ganas</span>
                </span>
            </li>
            <li
                class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-700">
                <span
                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-500">
                    <span class="mr-2">2</span>
                    Rellenar<span class="hidden sm:inline-flex sm:ml-2">Datos</span>
                </span>
            </li>
            <li class="flex items-center">
                <span class="mr-2">3</span>
                Confirmar <span class="hidden sm:inline-flex sm:ml-2"> Email</span>
            </li>
        </ol>


        <!-- FIN PASOS PARA REGISTRARSE-->
        <p class=" mx-4 text-center text-xl"> Utiliza nuestro sistema de puntuación para ver en qué nivel estas!</p>
        <p class="mt-4 text-3xl text-[#db811a]"> Compárate con tus amigos!</p>
        <button
            class=" flex place-content-center h-8 w-36 pt-1 mt-10  text-center text-white font-black z-0 rounded-2xl  bg-[#db811a] bg-gradient-to-br from-[#F79320]  ">
            REGISTRATE!
        </button>
        <hr class="w-48 h-1  my-10  border-0 rounded md:my-22 bg-[#30475D]">
        <p class="pb-2 text-center">Aseguramos una mejora del
            <span class="text-xl text-[#db811a]"> NIVEL</span> significativa gracias a nuestros cursos!
        </p>
        <p class=" text-center pb-10">En caso contrario te <span class="text-xl text-[#db811a] font-black">DEVOLVEMOS TU
                DINERO</span> </p>

        <div class=" mb-1 text-lg font-medium "></div>
        <div class=" w-[20rem] xl:w-[40rem] h-3 xl:h-4 mb-4 bg-gray-500 rounded-full">
            <div class="bg-[#db811a] h-3 xl:h-4 rounded-full " style="width: 75%"></div>
        </div>
        <div class="flex border-r-2 pt-10 border-[#db811a] px-2 h-[3rem] w-[10rem] xl:w-[20rem] ">

        </div>
        <div class="flex flex-row-reverse right-0 px-6 py-1 h-[6rem] w-[20rem] xl:w-[40rem] ">

            <div class="flex mt-4 space-x-4">
                <img class="  h-20 rounded-full" src="/public/images/avatar1.jpg" alt="">
                <div class="font-medium dark:text-white">
                    <div class="text-black">Paquito</div>
                    <div class="text-sm text-[#db811a]">2014 puntos</div>
                </div>
            </div>


        </div>
    </div>
</template>