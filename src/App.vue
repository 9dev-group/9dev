<template>
  <div id="app">
    <Slide width="160">
      <a href="#"><span>홈</span></a>
      <a href="#introduce"><span>소개</span></a>
      <a href="#location"><span>장소</span></a>
      <a href="#contact"><span>연락</span></a>
    </Slide>
    <main id="page-wrap">
      <div>
        <img v-bind:src="imgValuto"/>
        <h1>{{ message }}</h1>
      </div>
      <Introduce id="introduce"></Introduce>
      <div>
        <h2>사람들</h2>
        <div v-for="(item, index) in profiles" v-bind:key="index">
          <Profile v-bind:profile='item' />
        </div>
      </div>
      <Location id="location"></Location>
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import Introduce from './components/Introduce.vue';
import Location from './components/Location.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Profile from './components/Profile.vue';

const profiles = [
  {
    "name": "무지",
    "profession": "개발자",
    "motto": "짱짱 멋있는 개발자입니다"
  },
  {
    "name": "무지",
    "profession": "개발자",
    "motto": "짱짱 멋있는 개발자입니다"
  },
  {
    "name": "무지",
    "profession": "개발자",
    "motto": "짱짱 멋있는 개발자입니다"
  },
];

export default {
  name: 'app',
  created: function() {
    this.profiles = profiles;
  },
  data () {
    return {
      message: '9dev',
      imgValuto: 'src/images/valuto.jpg',
      profiles: []
    }
  },
  components: {
    Slide,
    Introduce,
    Location,
    Contact,
    Footer,
    Profile
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
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #1034A6;
}
</style>
