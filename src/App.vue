<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <v-app-bar
      app
      color="primary"
      dark
      elevation="0"
      class="px-4"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">
        <span class="text-h5">9DEV</span>
        <span class="text-caption ml-2">개발스터디</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <!-- 데스크톱 메뉴 -->
      <div class="d-none d-md-flex">
        <v-btn text @click="scrollToSection('front')" class="mx-2">홈</v-btn>
        <v-btn text @click="scrollToSection('introduce')" class="mx-2">소개</v-btn>
        <v-btn text @click="scrollToSection('profile')" class="mx-2">사람들</v-btn>
        <v-btn text @click="scrollToSection('information')" class="mx-2">정보</v-btn>
      </div>
    </v-app-bar>

    <!-- 모바일 사이드바 -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="primary"
      dark
    >
      <v-list>
        <v-list-item @click="scrollToSection('front'); drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>홈</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="scrollToSection('introduce'); drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>소개</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="scrollToSection('profile'); drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>사람들</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="scrollToSection('information'); drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>정보</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 메인 컨텐츠 -->
    <v-main>
      <Front id="front"></Front>
      <Introduce id="introduce"></Introduce>
      <Profile id="profile"></Profile>
      <Information id="information"></Information>
      <Footer id="footer"></Footer>
    </v-main>
  </div>
</template>

<script>
import Front from './components/Front.vue';
import Introduce from './components/Introduce.vue';
import Profile from './components/Profile.vue';
import Information from './components/Information.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Front,
    Introduce,
    Profile,
    Information,
    Footer
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
@import url('./css/menu.css');

#app {
  font-family: 'Noto Sans KR', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 스크롤바 스타일링 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 부드러운 스크롤 */
html {
  scroll-behavior: smooth;
}

/* 섹션 간격 */
section {
  padding: 80px 0;
}

/* 반응형 패딩 */
@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
}
</style>
