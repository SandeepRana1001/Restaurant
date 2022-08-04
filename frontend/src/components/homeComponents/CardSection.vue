<template>
  <div id="CardSection">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <card />
        </div>

        <div class="col-lg-4">
          <card />
        </div>

        <div class="col-lg-4">
          <card />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* eslint-disable */

#CardSection {
  margin: 50px 0;
}
</style>

<script>
import Card from "../global/card.vue";
export default {
  name: "CardSection",
  components: { Card },
};
</script>