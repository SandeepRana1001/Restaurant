<template>
  <div id="app">
    <Header
      text="Welcome To Our Restaurant"
      showbutton="true"
      button_1="Explore Website"
      button_2="Explore Menu"
    />
    <HomePage />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Header from "./components/global/header.vue";
import HomePage from "./components/homeComponents/HomePage.vue";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
  },
};
</script>


