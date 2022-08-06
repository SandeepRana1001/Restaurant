<template>
  <section id="hero">
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-sm-12 col-12">
          <div class="img-container">
            <img src="../../assets/banner_food.jpg" alt="North Indian Food" />
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-sm-10 col-10">
          <h3>Restaurant</h3>
          <p>Currently open for dine in & take out.</p>
          <p>
            <LinkButton link="/" text="View Menu"></LinkButton>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LinkButton from "../global/linkButton.vue";
/* eslint-disable */
export default {
  name: "Hero",
  components: { LinkButton },
};
</script>

<style scoped>
h3 {
  font-size: 3rem;
  letter-spacing: 1px;
  padding: 20px 0;
}

p {
  font-size: 15px;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  padding: 10px 0;
}

.img-container {
  height: 280px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}

@media only screen and (max-width: 600px) {
  h3 {
    text-align: center;
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 5px;
  }
  p {
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    padding: 10px 0;
  }
}
</style>
