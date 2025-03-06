<template>
  <div id="app">
    <nav class="bg-gradient-to-r from-gray-900 to-black flex items-center py-4 px-8 shadow-lg">
      <!-- Logo -->
      <router-link 
        to="portfolio" 
        class="text-[#d4bea4] font-extrabold text-xl tracking-widest uppercase transition duration-300 hover:scale-105">
        Taaniel
      </router-link>

      <!-- Navigation Links -->
      <div class="flex space-x-8 text-[#d4bea4] text-sm font-light uppercase ml-12">
        <router-link to="/page" class="hover:text-gray-400 transition duration-300">Work</router-link>
        <router-link to="/about" class="hover:text-gray-400 transition duration-300">About</router-link>
      </div>

      <!-- Call-to-Action Button -->
      <router-link 
        to="/talk" 
        class="ml-auto bg-[#d4bea4] text-black font-medium text-sm uppercase px-5 py-2 rounded-full border-2 border-transparent transition duration-300 hover:bg-transparent hover:border-[#d4bea4] hover:text-[#d4bea4] shadow-lg hover:shadow-[#d4bea4]/50">
        Let's Talk
      </router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>
