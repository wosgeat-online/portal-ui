<template>
  <div>
    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6">
      <div class="text-center">
        <h2
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          🤔 Wos geat
          <br class="xl:hidden"/>
          <span class="text-indigo-600">online?</span>
        </h2>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          WosGeat.Online hilft ihnen den passenden Livestream zu finden.
          Geben sie ihre Interessen ein und sehen sie alle Livestreams nach Relevanz und Chronologisch sortiert.
          Ihnen wird Zuhause nie mehr langweilig sein.
        </p>
        <form class="mt-16 max-w-md mx-auto sm:flex sm:justify-center md:mt-24" v-on:submit.prevent="search">
          <div class="rounded-md">
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">

                  <path clip-rule="evenodd"
                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                        fill="#4A5568"
                        fill-rule="evenodd"/>
                </svg>
              </div>
              <input
                class="form-input block w-full flex pl-10 items-center justify-center py-4 text-base leading-6 font-medium rounded-md"
                v-model="query"/>
            </div>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              v-on:click="search">
              Suchen
            </button>
          </div>
        </form>
        <div class="mt-20">
          <p class="m-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Thema:
          </p>
          <router-link
            class="m-3 inline-flex items-center text-2xl px-6 py-4 rounded-full text-xs font-medium leading-4 text-white bg-indigo-600"
            to="/events?category=Kochen">
            Kochen
          </router-link>
          <router-link
            class="m-3 inline-flex items-center text-2xl px-6 py-4 rounded-full text-xs font-medium leading-4 text-white bg-indigo-600"
            to="/events?category=Musik">
            Musik
          </router-link>
          <router-link
            class="m-3 inline-flex items-center text-2xl px-6 py-4 rounded-full text-xs font-medium leading-4 text-white bg-indigo-600"
            to="/events?category=Fitness">
            Fitness
          </router-link>
          <router-link
            class="m-3 inline-flex items-center text-2xl px-6 py-4 rounded-full text-xs font-medium leading-4 text-white bg-indigo-600"
            to="/events?category=Lernen">
            Lernen
          </router-link>
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
