<template>
  <div class="login-container">
    <form>
      <h1>Login</h1>
      <div class="input">
        <label>Username</label>
        <input v-model="username" required />
      </div>
      <div class="input">
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>
      <div class="button-container"><button>Login</button></div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/login.sass'
</style>
