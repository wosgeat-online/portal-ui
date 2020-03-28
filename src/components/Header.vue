<template>
  <div>
    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6">
      <div class="text-center">
        <h2
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Wos geat
          <br class="xl:hidden"/>
          <span class="text-indigo-600">online?</span>
        </h2>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
        </p>
        <div class="mt-16 max-w-md mx-auto sm:flex sm:justify-center md:mt-24">
          <div class="rounded-md">
            <input
              class="form-input block w-full flex items-center justify-center py-4 text-base leading-6 font-medium rounded-md"
              v-model="query"/>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              href="#"
              v-on:click="search">
              Suchen
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        if (this.query !== '') {
          this.$router.push({
            name: 'Events',
            query: {'q': this.query}
          })
        } else {
          this.$router.push({
            name: 'Events',
          })
        }
      },
    }
  }
</script>
