<template>
  <div class="cards">
    <CardItem
      v-for="assignment in assignments"
      :key="assignment.id"
      :assignmentName="assignment.name"
      :description="assignment.description"
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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquam tellus, sit amet consequat magna. Morbi rhoncus dictum massa, ut condimentum nulla blandit sit amet. Nullam magna nisl, hendrerit in justo vel, euismod tempus ipsum. Fusce gravida arcu facilisis faucibus sagittis. Donec non rhoncus justo, a pharetra quam. Phasellus euismod ornare lorem, sit amet tempor felis porta quis. Etiam lectus dolor, pretium quis quam vel, tempor volutpat lorem. Sed lectus quam, sagittis ac odio sed, efficitur fringilla tortor. Aenean vulputate tristique dolor sit amet suscipit. Sed luctus et lectus ut blandit. Morbi lacinia justo vitae est auctor, a iaculis odio sollicitudin. Sed quis lorem dignissim, molestie nunc a, porttitor urna.",
          score: 5,
        },
        {
          id: 1,
          name: "Title of this assignment",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquam tellus, sit amet consequat magna. Morbi rhoncus dictum massa, ut condimentum nulla blandit sit amet. Nullam magna nisl, hendrerit in justo vel, euismod tempus ipsum. Fusce gravida arcu facilisis faucibus sagittis. Donec non rhoncus justo, a pharetra quam. Phasellus euismod ornare lorem, sit amet tempor felis porta quis. Etiam lectus dolor, pretium quis quam vel, tempor volutpat lorem. Sed lectus quam, sagittis ac odio sed, efficitur fringilla tortor. Aenean vulputate tristique dolor sit amet suscipit. Sed luctus et lectus ut blandit. Morbi lacinia justo vitae est auctor, a iaculis odio sollicitudin. Sed quis lorem dignissim, molestie nunc a, porttitor urna.",
          score: 5,
        },
        {
          id: 2,
          name: "Title of this assignment",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquam tellus, sit amet consequat magna. Morbi rhoncus dictum massa, ut condimentum nulla blandit sit amet. Nullam magna nisl, hendrerit in justo vel, euismod tempus ipsum. Fusce gravida arcu facilisis faucibus sagittis. Donec non rhoncus justo, a pharetra quam. Phasellus euismod ornare lorem, sit amet tempor felis porta quis. Etiam lectus dolor, pretium quis quam vel, tempor volutpat lorem. Sed lectus quam, sagittis ac odio sed, efficitur fringilla tortor. Aenean vulputate tristique dolor sit amet suscipit. Sed luctus et lectus ut blandit. Morbi lacinia justo vitae est auctor, a iaculis odio sollicitudin. Sed quis lorem dignissim, molestie nunc a, porttitor urna.",
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
