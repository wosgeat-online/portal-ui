<template>
  <div>
    <iframe
      frameborder="0"
      height="100%" v-bind:src="'https://www.facebook.com/v2.3/plugins/video.php?allowfullscreen=true&autoplay=true&container_width=800&href='+videoUrl" width="100%"/>
  </div>
</template>

<script>
  export default {
    name: 'EmbeddedVideo',
    props: [
      'videoUrl'
    ]
  }
</script>
