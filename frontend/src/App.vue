<template>
  <div id="app">
    <HeaderNoBanner />
    <router-view></router-view>

    <Footer />
  </div>
</template>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,700&family=Roboto:wght@400;700&family=Uchen&display=swap");
</style>
<script>
/* eslint-disable */
import Header from "./components/global/header.vue";
import HomePage from "./components/homeComponents/HomePage.vue";
import Footer from "./components/global/footer.vue";
import HeaderNoBanner from "./components/global/headerNoBanner.vue";
export default {
  name: "App",
  components: {
    Header,
    HomePage,
    Footer,
    HeaderNoBanner,
  },
};
</script>