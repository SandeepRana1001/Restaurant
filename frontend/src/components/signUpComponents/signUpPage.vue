<template>
  <section class="signUpPage">
    <div class="container-fluid mobile_background">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-0 col-0 background"></div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="form_container">
            <h3 class="heading">Sign Up</h3>
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" autocomplete="off" />
              </div>
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
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  v-model="accepted"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree to all terms and conditions
                </label>
              </div>

              <CustomButton
                type="submit"
                text="Sign Up"
                classes="btn-block mb-3"
                :disabled_prop="!accepted"
              ></CustomButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  background: linear-gradient(
      to right,
      rgba(142, 68, 173, 0.5),
      rgba(155, 89, 182, 0.4)
    ),
    url("../../assets/banner_food.jpg");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
}
.mobile_background {
  background: none;
}

@media screen and (max-width: 600px) {
  .background {
    display: none;
  }
  .form_container h3 {
    text-align: center;
  }
  .mobile_background {
    background: linear-gradient(
        to right,
        rgba(142, 68, 173, 0.5),
        rgba(155, 89, 182, 0.4)
      ),
      url("../../assets/banner_food.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
  }
  .form_container {
    background: white;
    margin: 50px 0;
  }
}
</style>
<script>
import CustomButton from "../global/customButton.vue";
export default {
  name: "signUpPage",
  components: { CustomButton },
  data: () => {
    return {
      disabled: true,
      accepted: false,
    };
  },
};
</script>