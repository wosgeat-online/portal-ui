<template>
  <div>
    <NavMenu/>
    <Title v-bind:title="title"/>
    <div class="mx-auto max-w-screen-xl">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <li :key="event.id" class="list-none" v-for="event in events">
          <EventList v-bind:event="event"></EventList>
        </li>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios';
  import EventList from '@/components/EventList.vue'
  import Footer from "../components/Footer";
  import NavMenu from '@/components/NavMenu.vue'
  import Title from '@/components/Title.vue'

  export default {
    name: 'Events',
    components: {
      Footer,
      NavMenu,
      Title,
      EventList
    },
    data() {
      return {
        events: [],
      }
    },
    mounted() {
      let url = 'https://wosgeatonline-api.azurewebsites.net/events';
      if (this.$route.query.q) {
        url += '?q=' + this.$route.query.q;
      }
      if (this.$route.query.category) {
        url += '?category=' + this.$route.query.category;
      }
      axios
        .get(url)
        .then(response => (this.events = response.data.events))
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
    }
  }
</script>
