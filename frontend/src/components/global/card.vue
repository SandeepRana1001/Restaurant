<template>
  <div class="card">
    <div class="card_img_container">
      <img :src="image" class="card-img-top" :alt="heading" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ heading }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
    </div>

    <div class="card-footer">
      <LinkButton link="#" text="Order Now"></LinkButton>
    </div>
  </div>
</template>

<style>
.card {
  width: 18rem;
  border: 0;
}

.card-footer {
  border: 0;
  background: transparent;
}

.card_img_container {
  height: 250px;
}

img {
  height: 100%;
  object-fit: fill;
}
</style>

<script>
import LinkButton from "./linkButton.vue";
/* eslint-disable */
export default {
  name: "card",
  props: {
    heading: String,
    content: String,
    image: String,
  },
  components: { LinkButton },
};
</script>