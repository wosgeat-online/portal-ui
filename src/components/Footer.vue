<template>
  <div class="bg-white mt-32">
    <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <router-link
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
            to="/events">
            Events
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
            to="/about">
            Über uns
          </router-link>
        </div>
      </nav>
      <div class="mt-8">
        <p class="text-center text-base leading-6 text-gray-500">
          &copy; 2020 wosgeat.online - All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>
