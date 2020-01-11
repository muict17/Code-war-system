<template>
  <h1>{{ name }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    name: String,
  },
};
</script>

<style lang="sass" scoped>
h1
  color: #acadaf
  margin-top: 40px
</style>
