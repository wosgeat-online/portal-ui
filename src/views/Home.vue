<template>
  <div>
    <NavMenu/>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavMenu from "../components/NavMenu";
  import Header from '@/components/Header.vue'
  import Footer from "../components/Footer";

  export default {
    name: 'Home',
    components: {
      Footer,
      NavMenu,
      Header
    }
  }
</script>
