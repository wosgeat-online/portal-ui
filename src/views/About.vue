<template>
  <div>
    <NavMenu/>
    <Title title="Über uns"/>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavMenu from "../components/NavMenu";
  import Title from "../components/Title";
  import Footer from "../components/Footer";

  export default {
    name: 'About',
    components: {
      Footer,
      NavMenu,
      Title
    }
  }
</script>
