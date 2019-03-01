<template>
  <div id="app">
    <v-app>
      <v-toolbar fixed>
        <v-toolbar-title>9dev</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <router-link to="/">홈</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="/editor">글쓰기</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="/board">글목록</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content id="content">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');
@import url('./css/menu.css');

#app {
  font-family: 'Noto Sans KR', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  margin-top: 60px;
}
</style>
