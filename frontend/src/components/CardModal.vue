<template>
  <div class="modal">
    <div class="content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h1>{{ assignmentName }}</h1>
      <h3>Description</h3>
      <p>{{ description }}</p>
      <div class="score">Max score: {{ score }} pt</div>
      <UploadButton />
      <section class="bottom">
        <div class="timer">Time Left : 00:01:00</div>
        <section class="answer">
          <input :placeholder="placeHolder" />
          <button type="submit">Submit</button>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import UploadButton from "./UploadButton";

export default {
  name: "Modal",
  props: {
    assignmentName: String,
    description: String,
    score: Number,
  },
  data: function() {
    return {
      placeHolder: "Submit your answer here..",
    };
  },
  components: {
    UploadButton,
  },
};
</script>

<style lang="sass" scoped>
.modal
  position: fixed;
  top: 0
  left: 0
  z-index: 99
  width: 100vw
  height: 100vh
  max-height: 100%
  overflow: auto
  background: rgba(0, 0, 0, 0.4)
  display: flex
  justify-content: center
  align-items: center

.content
  background: #313638
  max-width: 60%
  position: relative
  padding: 40px

.close
  position: absolute
  top: 0
  right: 0
  font-size: 2rem
  padding: 10px
  margin-right: 20px

  &:hover, &:focus
    cursor: pointer

h1, h3, .score, .close
  color: #845DA2

section.bottom, section.answer
  display: flex
  justify-content: space-between
  align-items: center

section.bottom
  margin-top: 20px

  & > .timer
    color: #9A1212
    font-weight: bold

section.answer > input
  background: #ACAEAF
  font-size: 0.8rem
  border: none
  border-radius: 20px
  width: 200px
  padding: 5px 20px

section.answer > button
  background: transparent
  border: 3px solid #ACAEAF
  border-radius: 20px
  color: #ACAEAF
  font-size: 0.7rem
  margin-left: 10px
  padding: 5px 10px
</style>
