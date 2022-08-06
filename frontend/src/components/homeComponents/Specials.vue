<template>
  <section id="Specials">
    <div class="container">
      <h3 class="text-center">Today's Specials</h3>

      <div class="row justify-content-center">
        <div class="col-lg-3">
          <card
            image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            heading="Our Specials - I"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia"
          />
        </div>

        <div class="offset-1 col-lg-3">
          <card
            image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            heading="Our Specials - II"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia"
          />
        </div>

        <div class="offset-1 col-lg-3">
          <card
            image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            heading="Our Specials - III"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* eslint-disable */

h3 {
  font-size: 3rem;
  letter-spacing: 1px;
  padding: 20px 0;
}
</style>

<script>
/* eslint-disable */

import Card from "../global/card.vue";
export default {
  name: "Specials",
  components: { Card },
};
</script>