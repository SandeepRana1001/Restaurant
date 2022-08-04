<template>
  <div id="HomePage">
    <Hero />
    <CardSection />
  </div>
</template>
<script>
import Hero from "./hero.vue";
import CardSection from "./CardSection.vue";
export default {
  name: "HomePage",
  components: { Hero, CardSection },
};
</script>