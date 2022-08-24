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
          <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/signUp">Sign Up</router-link>
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/signIn">Sign In</router-link>
            </li>
            <li class="nav-item" v-if="loggedIn">
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>
            <li class="nav-item" v-if="loggedIn">
              <router-link class="nav-link" to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.dropdown-toggle:after {
  content: none;
}
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

:root {
  --avatar-size: 18rem;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.circle {
  background-color: #8e44ad;
  border-radius: 50%;
  padding: 3px;
  text-align: center;
}

.initials {
  color: white !important;
  font-size: 1rem; /* 50% of parent */
  line-height: 1;
  position: relative;
  /* top: calc(2rem / 4); 25% of parent */
}

.dropdown {
  border: 1px solid red;
  /* width: 200px !important; */
  margin-right: 20px !important;
}

@media only screen and (max-width: 600px) {
  .circle {
    background-color: transparent;
    color: red !important;
    border-radius: 0%;
    padding: 0px;
    text-align: center;
  }

  .initials {
    color: white !important;
    font-size: 0.5rem; /* 50% of parent */
    line-height: 0;
    position: relative;
    /* top: calc(2rem / 4); 25% of parent */
  }
  .navbar-brand {
    font-size: 0.7rem;
  }
}
</style>

<script>
/* eslint-disable */

export default {
  name: "Header",
  props: {
    navbarColor: String,
    loggedIn: Boolean,
    name: String,
  },
  methods: {
    signOut(e) {
      e.preventDefault();
      this.$store.userStore.commit("signOut");
      window.location.href = "/";
    },
  },
};
</script>