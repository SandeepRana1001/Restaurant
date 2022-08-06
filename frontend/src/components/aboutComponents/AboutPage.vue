<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12">
          <h3 class="heading">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          </p>

          <LinkButton link="#" text="Know More" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <IconWithDescription iconClass="lni-user" :text="text" />
        </div>
        <div class="offset-1 col-lg-3">
          <IconWithDescription iconClass="lni-envelope" :text="text" />
        </div>
        <div class="offset-1 col-lg-3">
          <IconWithDescription iconClass="lni-checkmark" :text="text" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: "Uchen", serif;
  padding: 80px 0;
}
.heading {
  color: #8e44ad;
  font-weight: bolder;
  font-size: 3rem;
  margin-bottom: 20px;
}
p {
  margin-bottom: 30px;
}

#about {
  background: url("../../assets/design_1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
<script>
import HeaderNoBanner from "../global/headerNoBanner.vue";
import IconWithDescription from "../global/iconWithDescription.vue";
import LinkButton from "../global/linkButton.vue";
/* eslint-disable */

export default {
  name: "About",
  components: {
    HeaderNoBanner,
    HeaderNoBanner,
    IconWithDescription,
    LinkButton,
  },
  data: () => {
    return {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ollitia, molestiae quas vel sint commodi",
    };
  },
};
</script>