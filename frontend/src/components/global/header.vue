<template>
  <div class="header" id="header">
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar_color fixed-top"
      id="my_nav"
    >
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

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
    if ($(window).scrollTop() > 50) {
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

