<template>
  <div>
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0 h-56">
        <EmbeddedVideo class="h-56 w-full object-cover"
                       v-bind:videoUrl="event.videoLink" v-if="play"></EmbeddedVideo>
        <div v-else>
          <EventState class="absolute p-3" v-bind:state="event.state"></EventState>
          <img alt="" class="h-56 w-full object-cover"
               v-bind:src="event.image"
               v-on:click="startVideo"/>
        </div>
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm leading-5 font-medium text-indigo-600">
            {{event.category}}
          </p>
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            <span v-if="event.description.length < 65">{{event.description}}</span>
            <span v-bind:title="event.description" v-else>{{event.description.substring(0, 70)}}...</span>
          </h3>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img alt=""
                 class="h-10 w-10 rounded-full"
                 v-bind:src="event.authorImage"/>
          </div>
          <div class="ml-3">
            <p class="flex text-sm leading-5 font-medium text-gray-900">
              {{event.authorName}}
            </p>
            <div class="flex text-sm leading-5 text-gray-500">
              <time>
                {{date}}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EventState from "./EventState";
  import EmbeddedVideo from "./EmbeddedVideo";

  export default {
    name: 'Event',
    components: {
      EmbeddedVideo,
      EventState
    },
    props: [
      'event',
    ],
    data() {
      return {
        play: false,
      }
    },
    methods: {
      startVideo() {
        this.play = true
      },
    },
    computed: {
      date: function () {
        const date = new Date(Date.parse(this.event.timestampStart));
        return date.toLocaleDateString('de') + ' ' + date.toLocaleTimeString('de', {
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }
  }
</script>
