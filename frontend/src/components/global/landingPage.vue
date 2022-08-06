<template>
  <main class="landingPage">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <img src="../../assets/landing_page.png" />
        </div>
        <div class="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="page_text_container">
            <h3>Friends & Family</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </p>
            <p>
              <LinkButton link="#" text="Learn More"></LinkButton>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.landingPage {
  height: 100vh;
  margin-top: 50px;
  /* border: 2px solid red; */
}

img {
  height: 100%;
  width: 100%;
  /* border: 2px solid red; */
}

.page_text_container h3 {
  text-align: right;
  color: #8e44ad;
  font-weight: bolder;
  font-size: 3rem;
  margin-bottom: 20px;
}

.page_text_container p {
  text-align: right;
  margin-bottom: 40px;
}

main {
  padding: 20px 0;
}

@media only screen and (max-width: 600px) {
  .landingPage {
    height: 100%;
  }
  main {
    padding: 0px 0;
  }
  .page_text_container h3 {
    text-align: center;
  }
  .page_text_container p {
    text-align: center;
  }
}
</style>

<script>
import LinkButton from "./linkButton.vue";
export default {
  name: "LandingPage",
  components: { LinkButton },
};
</script>