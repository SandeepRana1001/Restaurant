<template>
  <div class="header" id="header">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        class="navbar_color fixed-top"
        id="my_nav"
      >
        <b-navbar-brand href="#">Eat Pray Love</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Contact</b-nav-item>
            <b-nav-item href="#">Sign Up </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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

.navbar_color {
  background: transparent;
  transition: all 0.5s ease-in-out;
}
.navbar_color_dark {
  background: #2c3e50;
  transition: all 0.5s ease-in-out;
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
  border: 2px solid #c0392b;
}
.header_button_container button a {
  color: #c0392b;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;
}

.header_button_container button:hover {
  background: #c0392b;
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
import $ from "jquery";

$(document).ready(() => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      $("#my_nav").addClass("navbar_color_dark");
      $("#my_nav").removeClass("navbar_color");
    } else {
      $("#my_nav").addClass("navbar_color");
      $("#my_nav").removeClass("navbar_color_dark");
    }
  });
});

export default {
  /* eslint-disable */
  name: "Header",
  props: {
    text: String,
    showbutton: String,
    button_1: String,
    button_2: String,
  },
};
</script>

