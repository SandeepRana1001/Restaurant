<template>
  <div class="header" id="header">
    <HeaderNoBanner navbarColor="navbar_color" />
    <div class="header_items_container">
      <h4>{{ text }}</h4>
      <div class="header_button_container" v-if="showbutton.trim().length > 0">
        <button>
          <a href="#" class="anchors"> {{ button_1 }} </a>
        </button>

        <button>
          <a href="#" class="anchors"> {{ button_2 }} </a>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
#header {
  background: linear-gradient(35deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../../assets/banner_food.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.header_items_container {
  width: 100%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 30%);
}

.header_items_container h4 {
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 30px;
}
.header_button_container {
  width: 100%;
  text-align: center;
}

.header_button_container button {
  padding: 10px 17px;
  border-radius: 25px;
  margin: 0 10px;
  background: transparent;
  transition: all 0.5s ease-in-out;
  border: 2px solid #8e44ad;
}
.header_button_container button a {
  color: #8e44ad;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;
}

.header_button_container button:hover {
  background: #8e44ad;
}
.header_button_container button:hover > .anchors {
  color: white !important;
}

@media only screen and (max-width: 600px) {
  .header_items_container h4 {
    font-size: 3rem;
  }
  .header_button_container button {
    margin-bottom: 20px;
  }
}
</style>

<script>
import HeaderNoBanner from "./headerNoBanner.vue";

export default {
  /* eslint-disable */
  name: "Header",
  props: {
    text: String,
    showbutton: String,
    button_1: String,
    button_2: String,
  },
  components: { HeaderNoBanner },
};
</script>

