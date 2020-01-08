// @todo refactor this code.
<template>
  <div class="login-container">
    <form>
      <h1>Login</h1>
      <div class="input">
        <label>Username</label>
        <input @input="setUsername" required />
      </div>
      <div class="input">
        <label>Password</label>
        <input @input="setPassword" type="password" required />
      </div>
      <div class="button-container"><button>Login</button></div>
    </form>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    setUsername: debounce(function(e) {
      this.username = e.target.value;
    }, 500),
    setPassword: debounce(function(e) {
      this.password = e.target.value;
    }, 500)
  }
};
</script>

<style lang="sass" scoped>
.login-container
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

form
  color: #acaeaf
  background: #4e5154
  width: fit-content
  box-sizing: border-box
  padding: 20px 100px
  border-radius: 20px

  & > h1
    text-align: center
    margin: 10px 0

  & > div
    display: flex
    flex-flow: column

    & > label
      font-size: 1rem
      margin-bottom: 10px

    & > input
      width: 400px
      height: 35px
      font-size: 0.9rem
      border: none
      background: #ACAEAF
      border-radius: 20px
      padding: 0 10px
      margin-bottom: 20px

      &:focus
        outline: none

  & > .button-container
    width: 100%
    & > button
      color: #ACAEAF
      background: transparent
      font-size: 1rem
      padding: 10px 30px
      border: 3px solid #ACAEAF
      border-radius: 20px
      width: fit-content
      margin: 10px auto
</style>
