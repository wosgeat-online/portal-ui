<template>
  <div class="home">
    <NavMenu/>
    <Header/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavMenu from "../components/NavMenu";
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    components: {
      NavMenu,
      Header
    }
  }
</script>
