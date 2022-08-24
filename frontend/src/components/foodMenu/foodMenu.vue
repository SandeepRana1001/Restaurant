<template>
  <section class="menu">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-4 col-sm-6 col-12 mb-3"
          v-for="(food, index) in foodMenu"
          v-bind:key="index"
        >
          <FoodCard
            :category="food.category"
            :description="food.description"
            :image="food.image"
            :title="food.title"
            :foodType="food.food_type"
            :price="food.price"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 40px 0;
  /* height: 100vh; */
}
</style>


<script>
import api_auth_Object from "../../globalFunctions/api_auth";

import FoodCard from "../global/foodCard.vue";
/* eslint-disable */
export default {
  name: "foodMenu",
  data() {
    return {
      foodMenu: null,
      isLoggedIn: false,
    };
  },
  methods: {
    send() {
      this.$emit("send", "LoggedIn");
    },
  },
  async mounted() {
    this.$store.dispatch("updateUserIfLocalStorageExits");
    this.isLoggedIn = this.$store.state.userStore.user.isLoggedIn;
    if (this.isLoggedIn) {
      this.send();
    }

    const jsonData = await api_auth_Object.GET(
      "food/",
      this.$store.state.userStore.user.token
    );
    this.foodMenu = jsonData.data;
    console.log(this.foodMenu[0]);
  },
  components: { FoodCard },
};
</script>