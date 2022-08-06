<template>
  <div id="HomePage">
    <LandingPage />
    <HomeSection_I />
    <Hero />
    <Specials />
  </div>
</template>
<style scoped>
section {
  font-family: "Uchen", serif;
  padding: 80px 0;
}
@media only screen and (max-width: 600px) {
  section {
    font-family: "Uchen", serif;
    padding: 40px 0;
  }
}
</style>
<script>
/* eslint-disable */
import Hero from "./hero.vue";
import HomeSection_I from "./homeSection_I.vue";
import Specials from "./Specials.vue";
import LandingPage from "../global/landingPage.vue";
export default {
  name: "HomePage",
  components: { Hero, HomeSection_I, Specials, LandingPage },
};
</script>