<template>
  <div id="app">
    <Slide width="160">
      <a href="#"><span>홈</span></a>
      <a href="#introduce"><span>소개</span></a>
      <a href="#profile"><span>사람들</span></a>
      <a href="#information"><span>정보</span></a>
    </Slide>
    <v-content id="page-wrap">
      <Introduce id="introduce"></Introduce>
      <Profile id="profile"></Profile>
      <Information id="information"></Information>
      <Footer id="footer"></Footer>
    </v-content>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import Introduce from './components/Introduce.vue';
import Profile from './components/Profile.vue';
import Information from './components/Information.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Slide,
    Introduce,
    Profile,
    Information,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');
@import url('./css/menu.css');

#app {
  font-family: 'Noto Sans KR', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
