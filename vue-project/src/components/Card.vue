<script>
export default {
    data() { 
        return {
            left: true,
            right: false,
        }
    }
}

</script>

<template>
    <div class="flex  place-content-center relative h-[35rem]  overflow-hidden">
        <h1 class="text-center m-12 font-light text-3xl text-[#30475D]">
            NUESTROS CURSOS
        </h1> 
        <div  :class="{'translate-x-[50rem]':!left,'xl:translate-x-full':!left}" class="flex absolute w-[20] xl:w-[80rem]  duration-300 overflow-hidden place-content-center  m-32 p-10">

            <div class="hidden justify-center shadow-2xl  xl:flex">
                <div class=" rounded shadow-xl border-2 border-[#30475D] bg-white max-w-sm">
                    <a href="#!">
                        <img class=" " src="/public/images/basics.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some qasdassad asddddddddd
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>

            <div class="flex place-self-center ">
                <div class="rounded shadow-2xl border-2 border-[#30475D] mx-20  bg-white max-w-sm">
                    <a href="#!">
                        <img  src="/public/images/bandeja.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some qasdassad asddddddddd
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>

            <div class=" justify-center hidden xl:flex">
                <div class="rounded shadow-2xl border-2 border-[#30475D] bg-white max-w-sm">
                    <a href="#!">
                        <img  src="/public/images/tactics.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some qasdassad asddddddddd
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>

        <div :class="{'-translate-x-full':left}" class="flex absolute w-[80rem]  duration-300 overflow-hidden place-content-center m-32 p-10">

            <div class=" justify-center hidden xl:flex">
                <div class=" rounded shadow-2xl border-2 border-[#30475D] bg-white max-w-sm">
                    <a href="#!">
                        <img  src="/public/images/basics.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            ITEM 3
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="rounded shadow-2xl border-2 border-[#30475D] mx-20 bg-white max-w-sm">
                    <a href="#!">
                        <img  src="/public/images/bandeja.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            ITEM 4
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>

            <div class="  justify-center hidden xl:flex">
                <div class="rounded shadow-2xl border-2 border-[#30475D] bg-white max-w-sm">
                    <a href="#!">
                        <img  src="/public/images/tactics.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            ITEM 5
                        </p>
                        <button type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>




        </div>

        <!-- Boton para slider-->



        <img  @click="right=false; left=true" :class="{'hidden':left}" class="flex  absolute w-10 left-20  my-64 rounded-xl rotate-180 " src="/public/images/next.png" alt="">
        <img @click="left=false; right=true " :class="{'hidden':!left}" class="flex absolute  right-20 my-64 w-10" src="/public/images/next.png" alt="">

        
    </div>

</template>