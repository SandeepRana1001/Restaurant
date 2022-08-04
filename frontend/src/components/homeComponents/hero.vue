<template>
  <div id="hero">
    <div class="container mb-5">
      <div class="row justify-content-around">
        <div class="col-xl-6 col-lg-6 col-sm-12 col-12">
          <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
          </p>
        </div>

        <div class="col-xl-6 col-lg-6 col-sm-12 col-12">
          <div class="img-container">
            <img src="../../assets/banner_food.jpg" alt="North Indian Food" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Hero",
};
</script>

<style scoped>
#hero {
  margin-top: 50px;
  margin-bottom: 100px;
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
</style>
