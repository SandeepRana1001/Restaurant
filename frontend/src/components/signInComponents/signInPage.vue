<template>
  <section class="signInPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="form_container">
            <form>
              <h3 class="text-center mb-4">Sign In</h3>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" autocomplete="off" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  autocomplete="off"
                />
              </div>

              <CustomButton
                type="submit"
                text="Sign Up"
                classes="btn-block mt-5 mb-3"
              ></CustomButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.signInPage {
  background: linear-gradient(
      to right,
      rgba(142, 68, 173, 0.8),
      rgba(155, 89, 182, 0.6)
    ),
    url("../../assets/banner_food.jpg");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  /* background-repea */
}

.form_container {
  background: white;
  padding: 20px;
  margin: 60px 0;
}

.form-group {
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  .signInPage {
    height: 100%;
  }
}
</style>
<script>
import CustomButton from "../global/customButton.vue";

export default {
  name: "signInPage",
  components: { CustomButton },
};
</script>