<template>
  <div class="cards">
    <CardItem
      v-for="assignment in assignments"
      :key="assignment.id"
      :assignmentName="assignment.name"
      :score="assignment.score"
    />
  </div>
</template>

<script>
import CardItem from "./CardItem";

export default {
  name: "Card",
  // @todo add api here
  data: function() {
    return {
      assignments: [
        {
          id: 0,
          name: "Title of this assignment",
          score: 5,
        },
        {
          id: 1,
          name: "Title of this assignment",
          score: 5,
        },
        {
          id: 2,
          name: "Title of this assignment",
          score: 5,
        },
      ],
    };
  },
  components: {
    CardItem,
  },
};
</script>

<style lang="sass" scoped>
.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 20px
</style>
