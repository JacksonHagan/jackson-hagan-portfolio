<template>
  <nav class="z-20 w-full absolute bg-gray-900/20 overflow-hidden ">
    <div class="mx-auto w-full max-w-7xl flex items-center justify-between px-8">
      <div class="flex items-center justify-start gap-3">
        <div class="relative pointer-events-none">
          <div
              class="w-full absolute left-0 h-[10px] bg-gradient-to-b from-yellow to-blue top-0 -z-1 blur-md animate-pulse"
              style="animation-duration:3s"></div>
        </div>
        <p class="text-white font-bold text-base">

        </p>
      </div>
      <ul class="flex items-center justify-end gap-8 text-base h-20 gap-x-16">
        <li class="shiny-hover relative group flex h-full items-center group">
          <a href="#recent-projects" class="font-medium flex h-full items-center text-gray-300">
            Recent Projects
          </a>
          <div class="opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none -z-10 w-full h-full min-h-[80px] min-w-[80px] rounded-full absolute top-14 gradient-experience__1 blur-[20px]"></div>
        </li>

        <li class="shiny-hover relative group flex h-full items-center">
          <a href="#experience" class="font-medium flex h-full items-center text-gray-300">
            Experiences
          </a>

          <div class="opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none -z-10 w-full h-full min-h-[80px] min-w-[80px] rounded-full absolute top-14 gradient-experience__1 blur-[20px]"></div>
        </li>
      </ul>
    </div>
    <div class="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.15]"></div>
  </nav>
</template>
<script setup>
</script>
