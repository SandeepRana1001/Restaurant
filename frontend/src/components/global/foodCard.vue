<template>
  <section class="foodCard">
    <div class="card">
      <div class="container">
        <div class="card_header float_element">
          <h6 class="category">{{ category }}</h6>
          <h6 class="price">₹ {{ price }}</h6>
        </div>
      </div>

      <div class="card_img">
        <img :src="image" />
      </div>
      <div class="container">
        <div class="card_title">
          <h6
            class="left"
            v-bind:class="foodType === 'veg' ? 'veg' : 'non-veg'"
          >
            {{ title }}
          </h6>
        </div>
        <div class="card_description mt-3 mb-3">
          <p>
            {{ descriptionLength }}
            <a href="#"> more ...</a>
          </p>
          <p></p>
        </div>
        <div class="card_footer">
          <CustomButton
            text="Add To Cart"
            type="button"
            classes="btn-block"
            iconClass="lni lni-plus"
          />
        </div>
      </div>
    </div>
    <OffCanvas />
  </section>
</template>

<style scoped>
.card {
  border: 1px solid #8e44ad;
  border-radius: 10px;
  padding: 20px 0px;
  transition: all 0.5s ease-in-out;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 2px 2px 1px 1px #718093;
}

.card_header {
  display: block;
}
.card_img {
  width: 100%;
  height: 200px;
}
.card_img img {
  width: inherit;
  height: inherit;
}

.category {
  /* text-align: left; */
  float: left;
  font-weight: bold;
  text-transform: capitalize;
}
.price {
  /* text-align: right; */
  float: right;
  color: #8e44ad;
  font-weight: bold;
  font-size: 1.2rem;
}

.card_title h6 {
  font-weight: bold;
  margin: 20px 0;
}
.veg {
  color: #27ae60;
}

.non-veg {
  color: #c0392b;
}
</style>

<script>
import CustomButton from "./customButton.vue";
import OffCanvas from "./offCanvas.vue";
export default {
  name: "foodCard",
  props: {
    category: String,
    foodType: String,
    image: String,
    price: Number,
    title: String,
    description: String,
  },

  computed: {
    descriptionLength() {
      const length = 50;
      var newDescription = [];
      for (let i = 0; i < length; i++) {
        newDescription.push(this.description.charAt(i));
      }
      return newDescription.join("");
    },
  },
  components: { CustomButton, OffCanvas },
};
</script>