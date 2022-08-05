<template>
  <div id="app">
    <Header
      text="Welcome To Our Restaurant"
      showbutton="true"
      button_1="Explore Website"
      button_2="Explore Menu"
    />
    <HomePage />
    <Footer />
  </div>
</template>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,700&family=Roboto:wght@400;700&family=Uchen&display=swap");

.theme {
  border: 2px solid #c0392b;
  transition: all 0.5s ease-in-out;
  padding: 10px 20px;
  color: #c0392b;
  font-family: "Roboto";
}

.theme:hover {
  background-color: #c0392b;
  color: white;
}
</style>
<script>
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
};
</script>


