<template>
  <div class="navbar">
    <router-link class="item" to="/">Codewar</router-link>
    <div class="menus">
      <div class="item">
        <FontAwesomeIcon :icon="['far', 'user']" />
        User: xxxx
      </div>
      <router-link class="item" to="/ranking">Ranking</router-link>
      <div class="item">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="sass" scoped>
.navbar, .item, a
  color: #acadaf
  font-size: 1rem


.navbar, .menus
  display: flex
  align-items: center

.navbar
  margin: 20px 0
  justify-content: space-between

.menus > .item
  margin: 0 10px

a
  text-decoration: none
</style>
