<template>
  <div>
    <Modal
      v-if="isModalOpen"
      :assignmentName="assignmentName"
      :description="description"
      :score="score"
      @close="onChangeStateModal"
    />
    <div class="item" @click="onChangeStateModal">
      <div class="name">{{ assignmentName }}</div>
      <div class="score">Max Score: {{ score }} pt</div>
    </div>
  </div>
</template>

<script>
import Modal from "./CardModal";

export default {
  name: "CardItem",
  props: {
    assignmentName: String,
    description: String,
    score: Number,
  },
  data: function() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    onChangeStateModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
  components: {
    Modal,
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
  cursor: pointer

.name
  font-size: 24px
  margin-bottom: 20px
</style>
