<template>
  <div id="home">
    <Front id="front"></Front>
    <Introduce id="introduce"></Introduce>
    <Profile id="profile"></Profile>
    <Information id="information"></Information>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Front from './Front.vue';
import Introduce from './Introduce.vue';
import Profile from './Profile.vue';
import Information from './Information.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Front,
    Introduce,
    Profile,
    Information,
    Footer
  }
}
</script>

<style>
#home {
  text-align: center;
}
</style>


