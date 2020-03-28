<template>
  <div class="about">
    <NavMenu/>
    <Title title="Über uns"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavMenu from "../components/NavMenu";
  import Title from "../components/Title";

  export default {
    name: 'About',
    components: {
      NavMenu,
      Title
    }
  }
</script>
