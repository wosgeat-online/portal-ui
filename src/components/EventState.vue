<template>
  <div>
    <span
      class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-gray-800"
      v-if="state === 'pending'">
      Bald verfügbar
    </span>
    <span
      class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-gray-800"
      v-else-if="state === 'running'">
      Läuft jetzt
    </span>
    <span
      class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800"
      v-else-if="state === 'finished'">
      Abgeschlossen
      </span>
  </div>
</template>

<script>
  export default {
    name: 'EventState',
    props: [
      'state'
    ]
  }
</script>
