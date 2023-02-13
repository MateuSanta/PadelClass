<template>
  <footer class="p-4 shadow md:px-6 md:py-8 bg-gray-900 w-full">
    <div class="sm:flex sm:items-center sm:justify-between">
      <router-link
        class="self-center text-2xl font-semibold font-[Montserrat] whitespace-nowrap text-white"
        :to="{ path: '/home' }"
      >
        PadelClass</router-link
      >

      <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <span class="block text-sm sm:text-center text-gray-400"
      >© 3 <a href="https://flowbite.com/" class="hover:underline">PadelClass</a>. All
      Rights Reserved.
    </span>
  </footer>
</template>
