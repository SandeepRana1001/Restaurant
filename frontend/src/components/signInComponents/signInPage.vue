<template>
  <section class="signInPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="form_container">
            <form v-on:submit="signInHandler">
              <h3 class="heading text-center mb-4">Sign In</h3>
              <div class="alert alert-danger" v-if="errors.errorMessage">
                <p>{{ errors.errorMessage }}</p>
              </div>
              <div class="form-group" :class="errors.email ? 'error' : ''">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  autocomplete="off"
                  v-model="formData.email"
                />

                <p v-if="errors.email">{{ errors.email }}</p>
              </div>
              <div class="form-group" :class="errors.key ? 'error' : ''">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  autocomplete="off"
                  v-model="formData.key"
                />
                <p v-if="errors.key">{{ errors.key }}</p>
              </div>

              <CustomButton
                type="submit"
                text="Sign Up"
                classes="btn-block mt-5 mb-3"
                :loading="utils.loadingData"
                :disabled_prop="utils.disabled"
                iconClass=""
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
/* eslint-disable */
import CustomButton from "../global/customButton.vue";
import axios from "axios";
import validator from "../../globalFunctions/validation";
import apiObject from "../../globalFunctions/api";
export default {
  name: "signInPage",
  components: { CustomButton },
  data() {
    return {
      utils: {
        loadingData: false,
        disabled: false,
      },
      formData: {
        email: "sr36358@gmail.com",
        key: "1234567",
      },
      errors: {
        email: null,
        key: null,
        errorMessage: null,
      },
    };
  },
  methods: {
    updateUtils(bool) {
      this.utils.disabled = bool;
      this.utils.loadingData = bool;
    },
    async signInHandler(e) {
      e.preventDefault();
      // this.$store.commit("increment", 5);
      // console.log(this.$store.state.counter);

      if (!validator.emailValidation(this.formData.email)) {
        this.errors.email = "Valid email address is required";
        return false;
      } else {
        this.errors.email = null;
      }
      if (!validator.stringValidation(this.formData.key, 1)) {
        this.errors.key = "Password is required";
        return false;
      } else {
        this.errors.key = null;
      }

      if (!this.errors.email && !this.errors.key) {
        this.updateUtils(true);

        //api call

        const jsonData = await apiObject.POST("users/signIn", {
          email: this.formData.email,
          password: this.formData.key,
        });

        if (jsonData.status !== 200 && jsonData.ok === false) {
          this.updateUtils(true);

          this.errors.errorMessage = jsonData.message;
        } else {
          this.updateUtils(false);
          this.errors.errorMessage = null;
          const body = jsonData.content.user;
          // console.log(jsonData.content.user);
          body.isLoggedIn = true;
          // const body = jsonData.
          this.$store.dispatch("updateUser", body);
          this.$store.dispatch("setLocalStorage", body);

          console.log(this.$store);

          window.location.href = "/#menu";
          this.$router.push("/menu");
        }
      }
    },
  },
};
</script>