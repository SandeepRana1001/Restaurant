<template>
  <div id="HomePage">
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
</style>
<script>
import Hero from "./hero.vue";
import HomeSection_I from "./homeSection_I.vue";
import Specials from "./Specials.vue";
export default {
  name: "HomePage",
  components: { Hero, HomeSection_I, Specials },
};
</script>