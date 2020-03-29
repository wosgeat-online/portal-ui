<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Neuste Events
        </h2>
      </div>
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <li :key="event.id" class="list-none" v-for="event in events">
          <Event v-bind:event="event"></Event>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Event from "./Event";

  export default {
    name: 'NewEvents',
    components: {Event},
    data() {
      return {
        events: [],
      }
    },
    mounted() {
      axios
        .get('https://wosgeatonline-api.azurewebsites.net/events?limit=3')
        .then(response => (this.events = response.data.events))
    },
  }
</script>
