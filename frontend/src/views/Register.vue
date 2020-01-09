<template>
  <div class="register">
    <form>
      <h1>Register</h1>
      <div class="input">
        <label>Username</label>
        <input v-model="username" required />
      </div>
      <div class="input">
        <label>Student ID</label>
        <input v-model="studentid" required />
      </div>
      <div class="input">
        <label>Email address</label>
        <input
          v-model="email"
          type="email"
          pattern=".+@mahidol\.student\.ac\.th"
          title="Email address should match to mahidol email"
          required
        />
      </div>
      <div class="input">
        <label>Password</label>
        <input
          :class="{ 'is-error': isPasswordNotMatch }"
          v-model="firstTypedPassword"
          type="password"
          required
        />
      </div>
      <div class="input">
        <label>Retype Password</label>
        <input
          :class="{ 'is-error': isPasswordNotMatch }"
          type="password"
          required
        />
      </div>
      <div v-if="isPasswordNotMatch" class="error">
        Your password don't match
      </div>
      <div class="button-container">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// @todo add password validation
export default {
  data: function() {
    return {
      username: "",
      studentid: "",
      email: "",
      firstTypedPassword: "",
      actualPassword: "",
      isPasswordNotMatch: false,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/register.sass'
</style>
