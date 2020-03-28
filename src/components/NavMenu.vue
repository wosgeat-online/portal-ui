<template>
  <div>
    <div class="relative pt-6">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <img alt="" class="h-8 w-auto sm:h-10" src="/img/logos/workflow-mark-on-white.svg"/>
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  type="button"
                  v-on:click="toggle">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <router-link
              class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              to="/">
              Startseite
            </router-link>
            <router-link
              class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              to="/events">
              Events
            </router-link>
            <router-link
              class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              to="/about">
              Über uns
            </router-link>
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          </div>
        </nav>
      </div>

      <div class="absolute top-0 inset-x-0 p-2 md:hidden" v-show="toggled === true">
        <div class="rounded-lg shadow-md transition transform origin-top-right">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img alt="" class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg"/>
              </div>
              <div class="-mr-2">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  type="button"
                  v-on:click="toggle">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <router-link
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                to="/">
                Startseite
              </router-link>
              <router-link
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                to="/events">
                Events
              </router-link>
              <router-link
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                to="/about">
                Über uns
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: {
      open: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        toggled: !!this.open
      }
    },
    methods: {
      toggle() {
        const toggled = !this.toggled;
        if (!this.sync) {
          this.toggled = toggled;
        }
      },
    }
  }
</script>
