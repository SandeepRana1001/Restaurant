<template>
  <section class="customInput">
    <div class="form-group" :class="formData.input ? 'error' : ''">
      <label>{{ label }}</label>
      <input
        :type="type"
        class="form-control"
        autocomplete="off"
        v-model="formData.input"
        :onchange="onChangeHandler"
      />
      <p v-if="formData.email">{{ formData.input }}</p>
    </div>
  </section>
</template>


<script>
export default {
  name: "customInput",
  props: {
    label: String,
    type: String,
    validation: Function,
    getData: Function,
  },
  data() {
    return {
      formData: {
        input: null,
        error: null,
      },
    };
  },
  methods: {
    onChangeHandler() {
      this.getData(this.formData.input);
    },
  },
};
</script>