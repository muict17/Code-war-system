<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="sass" scoped>
.container
  margin: 0 120px
</style>
