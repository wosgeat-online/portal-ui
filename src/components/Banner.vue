<template>
  <div class="fixed inset-x-0 bottom-0">
    <div class="bg-indigo-600">
      <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
            </svg>
          </span>
            <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">
              #ibleibdohoam - bald noch mehr Events...
            </span>
              <span class="hidden md:inline">
              #ibleibdohoam - noch mehr interaktive Events in Kürze...
            </span>
            </p>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
  }
</script>
