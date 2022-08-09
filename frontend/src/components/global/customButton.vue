<template>
  <button
    :type="type"
    class="btn theme"
    :class="classes"
    :disabled="disabled_prop"
  >
    {{ text }}
    <i class="lni lni-arrow-right"></i>
  </button>
</template>

<style scoped>
.theme {
  border: 2px solid #8e44ad;
  transition: all 0.5s ease-in-out;
  padding: 10px 20px;
  color: #8e44ad;
  font-family: "Roboto";
  transition: all 0.5s ease-in-out;
}
.theme i {
  margin-left: 3px;
  color: #8e44ad;
  transition: all 0.5s ease-in-out;
}
.theme:hover {
  background-color: #8e44ad;
  color: white;
}

a:hover {
  text-decoration: none;
}
.theme:hover i {
  color: white;
  transform: translateX(10px);
}
</style>

<script>
export default {
  name: "CustomButton",
  props: {
    type: String,
    text: String,
    classes: String,
    disabled_prop: Boolean,
  },
};
</script>