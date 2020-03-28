<template>
  <div>
    <NavMenu/>
    <Title v-bind:title="title"/>
    <div class="mx-auto max-w-screen-xl">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <li :key="event.id" class="list-none" v-for="event in events">
          <Event v-bind:event="event"></Event>
        </li>
      </div>
      <div class="text-center" v-if="events.length === 0">
        <p class="pb-8 text-xl leading-9 tracking-tight font-extrabold text-gray-600 sm:text-3xl sm:leading-10">Keine
          Events
          gefunden</p>

        <router-link
          class="text-lg ml-10 sm:text-2xl font-medium text-gray-400 hover:text-gray-800 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          to="/events">
          🕵 Alle Events anzeigen
        </router-link>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios';
  import NavMenu from '@/components/NavMenu.vue'
  import Title from '@/components/Title.vue'
  import Event from "../components/Event";
  import Footer from "../components/Footer";

  export default {
    name: 'Events',
    components: {
      Event,
      Footer,
      NavMenu,
      Title
    },
    data() {
      return {
        events: [],
      }
    },
    beforeRouteUpdate(to, from, next) {
      next()
      this.getEvents()
    },
    mounted() {
      this.getEvents()
    },
    computed: {
      title: function () {
        if (this.$route.query.q !== '' && this.$route.query.q !== undefined) {
          return 'Ergebnise für "' + this.$route.query.q + '"';
        }
        if (this.$route.query.category !== '' && this.$route.query.category !== undefined) {
          return 'Events zum Thema ' + this.$route.query.category;
        }

        return 'Alle Events';
      }
    },
    methods: {
      getEvents() {
        let url = 'https://wosgeatonline-api.azurewebsites.net/events';
        if (this.$route.query.q) {
          url += '?q=' + this.$route.query.q;
        }
        if (this.$route.query.category) {
          url += '?category=' + this.$route.query.category;
        }
        console.log(url);
        axios
          .get(url)
          .then(response => (this.events = response.data.events))
      }
    }
  }
</script>
