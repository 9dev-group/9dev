<template>
  <div id="app">
    <div>
      <img src="./assets/valuto.jpg">
      <h1>{{ message }}</h1>
    </div>
    <Introduce></Introduce>
    <People></People>
    <Location></Location>
    <Footer></Footer>
  </div>
</template>

<script>
import Introduce from './components/Introduce.vue';
import People from './components/People.vue';
import Location from './components/Location.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data () {
    return {
      message: '9dev'
    }
  },
  components: {
    'Introduce': Introduce,
    'People': People,
    'Location': Location,
    'Footer': Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');

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
