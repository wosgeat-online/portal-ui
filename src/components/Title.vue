<template>
  <div>
    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          {{title}}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          {{description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: [
      'title',
      'description'
    ],
  }
</script>
