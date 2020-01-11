<template>
  <div class="item">
    <div class="name">{{ assignmentName }}</div>
    <div class="score">Max Score: {{ score }} pt</div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    assignmentName: String,
    score: Number,
  },
};
</script>

<style lang="sass" scoped>
.item
  box-sizing: border-box
  width: 100%
  background: #4E5154
  color: #ACAEAF
  padding: 30px

.name
  font-size: 24px
  margin-bottom: 20px
</style>
