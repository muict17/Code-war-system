<template>
  <Container>
    <div class="home">
      <Navbar />
      <Title name="Today's assignment" />
      <Cards />
    </div>
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";
import Navbar from "@/components/Navbar.vue";
import Title from "@/components/Title.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "home",
  components: {
    Container,
    Navbar,
    Cards,
    Title,
  },
};
</script>
