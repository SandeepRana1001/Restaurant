<template>
  <section class="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
          <div class="text_content">
            <h3 class="heading">Contact Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
          <div class="card_class">
            <div class="form-container mb-3 mt-3">
              <form>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="form-group">
                      <label>Describe your issue</label>
                      <textarea class="form-control" rows="5"></textarea>
                    </div>
                  </div>
                </div>
                <CustomButton
                  text="Submit"
                  type="submit"
                  classes="btn-block"
                ></CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container {
  z-index: 2;
}
.text_content h3,
.text_content p {
  text-align: center;
}

.text_content h3 {
  margin: 20px 0;
}
.card_class {
  width: 100%;
  background: white !important;
  z-index: 2;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 1px black;
}

.card_class .form-container {
  padding: 40px 40px;
}

.contact {
  width: 100%;
  height: 120vh;
  padding: 30px 0;
  position: relative;
}

.contact:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(350deg, rgba(142, 68, 173, 0.4) 45%, white 0%);
  z-index: -1;
}
@media only screen and (max-width: 600px) {
  .contact {
    height: 100%;
  }
  .form-container {
    margin-top: 50px;
  }
}
</style>
<script>
import CustomButton from "../global/customButton.vue";
/* eslint-disable */
export default {
  name: "ContactPage",
  components: { CustomButton },
};
</script>