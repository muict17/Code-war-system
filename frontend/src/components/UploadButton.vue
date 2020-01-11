<template>
  <div class="upload-button-wrapper">
    <button>
      <FontAwesomeIcon :icon="['far', 'file-code']" />
      Upload your code here
    </button>
    <input type="file" />
  </div>
</template>

<script>
export default {
  name: "UploadButton",
};
</script>

<style lang="sass" scoped>
.upload-button-wrapper
  position: relative
  overflow: hidden
  width: fit-content
  margin: 0
  margin-left: auto

button
  background: #4E5154
  color: #845DA2
  font-size: 1rem
  padding: 5px 20px
  border: none
  border-radius: 20px

  & > svg
    margin-right: 10px

input[type="file"]
  position: absolute
  top: 0
  left: 0
  font-size: 100px
  opacity: 0
</style>
