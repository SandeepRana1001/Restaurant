<template>
  <div class="navbar_container">
    <nav class="navbar navbar-expand-lg navbar-light navbar_color" id="my_nav">
      <div class="container">
        <router-link class="navbar-brand" to="/">Friends & Family</router-link>
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
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>
a.router-link-exact-active {
  color: #8e44ad !important;
}

.navbar-brand {
  font-weight: bold;
}

.navbar_color {
  background: transparent;
  transition: all 0.5s ease-in-out;
}

.navbar_color_dark {
  background: #2c3e50;
  transition: all 0.5s ease-in-out;
}
</style>

<script>
/* eslint-disable */

export default {
  name: "Header",
  props: {
    navbarColor: String,
  },
};
</script>