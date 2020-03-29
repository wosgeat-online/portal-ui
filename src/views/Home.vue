<template>
  <div>
    <NavMenu/>
    <Header/>
    <NewEvents/>
    <Banner/>
    <Footer class="pb-10"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavMenu from "../components/NavMenu";
  import Header from '../components/Header.vue'
  import NewEvents from "../components/NewEvents";
  import Footer from "../components/Footer";
  import Banner from "../components/Banner";

  export default {
    name: 'Home',
    components: {
      Banner,
      NewEvents,
      Footer,
      NavMenu,
      Header
    }
  }
</script>
