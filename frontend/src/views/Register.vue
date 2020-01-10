<template>
  <div class="register">
    <form>
      <h1>Register</h1>

      <!-- Username Input -->
      <div class="input">
        <label>Username</label>
        <input v-model="username" required />
      </div>

      <!-- Student ID input -->
      <div class="input">
        <label>Student ID</label>
        <input v-model="studentid" required />
      </div>

      <!-- Email input -->
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

      <!-- Password Input -->
      <div class="input form-group">
        <label>Password</label>
        <input
          type="password"
          v-model.trim="$v.password.$model"
          :class="{ 'is-error': $v.password.$error }"
          required
        />
      </div>

      <div class="error" v-if="!$v.password.minLength">
        Password must have at least
        {{ $v.password.$params.minLength.min }} letters.
      </div>

      <!-- Password validation input -->
      <div class="input form-group">
        <label>Retype Password</label>
        <input
          type="password"
          v-model.trim="$v.repeatPassword.$model"
          :class="{ 'is-error': $v.repeatPassword.$error }"
          required
        />
      </div>

      <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
        Passwords must be matched as above.
      </div>

      <div class="button-container">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      username: "",
      studentid: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/register.sass'
</style>
