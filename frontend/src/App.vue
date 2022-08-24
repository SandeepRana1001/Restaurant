<template>
  <div id="app">
    <Header :loggedIn="loggedIn" />
    <router-view @send="receive"></router-view>

    <Footer />
  </div>
</template>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,700&family=Roboto:wght@400;700&family=Uchen&display=swap");

label {
  margin-bottom: 0 !important;
}

.form-group,
.form-check {
  margin: 20px 0;
}

.form-control {
  border: 0;
  border-bottom: 2px solid #9b59b6;
}

.form_container {
  margin-top: 10px;
  padding: 20px;
}

.form_container h3 {
  font-size: 2rem;
  font-weight: bold;
}

input:focus,
textarea:focus {
  box-shadow: none !important;
}

.heading {
  color: #8e44ad;
  font-weight: bolder;
  font-size: 3rem;
  margin-bottom: 20px;
}

.error input {
  border-bottom: 2px solid #c0392b;
}
.error p {
  color: #c0392b;
  margin: 5px 0 !important;
}
</style>
<script>
/* eslint-disable */
import Header from "./components/global/header.vue";
import HomePage from "./components/homeComponents/HomePage.vue";
import Footer from "./components/global/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
    Footer,
  },
  data() {
    return {
      loggedIn: false,
      name: null,
    };
  },
  methods: {
    receive(childData) {
      this.loggedIn = true;
    },
  },
};
</script>