<template>
  <section id="iconWithDescription">
    <div class="">
      <div class="icon_container">
        <i class="lni" :class="iconClass"></i>
      </div>
      <div class="icon_description_container">
        <p class="icon-description">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon_container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.icon_container i {
  color: #8e44ad;
  font-size: 25px;
}

.icon-description {
  color: #8e44ad;
}
</style>


<script>
export default {
  name: "IconWithDescription",
  props: { iconClass: String, text: String },
};
</script>