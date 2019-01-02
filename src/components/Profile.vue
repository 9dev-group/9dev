<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline">사람들</h2>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4 v-for="(item, index) in profiles" v-bind:key="index">
              <Card v-bind:profile='item' />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Card from './Card.vue';

const prodProfileImgPath = "https://raw.githubusercontent.com/greatfarmer/9dev/master/src/assets/images/profiles/";
const devProfileImgPath = "src/assets/images/profiles/";

const profiles = [
  {
    "name": "햇반a",
    "profession": "웹 개발자",
    "motto": "오늘도 취한드..",
    "image": prodProfileImgPath + "hat.jpg"
  },
  {
    "name": "여니",
    "profession": "솔루션 개발자",
    "motto": "딸기좋아❤️",
    "image": prodProfileImgPath + "strawberry.jpg"
  },
  {
    "name": "우저이",
    "profession": "웹 개발자",
    "motto": "오늘도 행복하게 :D",
    "image": prodProfileImgPath + "woo.jpg"
  },
  {
    "name": "강뚱",
    "profession": "웹 개발자",
    "motto": "뚱이를 좋아합니다",
    "image": prodProfileImgPath + "patrick.jpg",
    "link": "https://github.com/greatfarmer"
  },
  {
    "name": "재연링",
    "profession": "서버 개발자",
    "motto": "한량 개발자가 되고 싶어요",
    "image": prodProfileImgPath + "jaeyeonling.jpg",
    "link": "https://github.com/jaeyeonling"
  },
  {
    "name": "미노",
    "profession": "프론트 개발자",
    "motto": "네 그냥 상직적인거됴",
    "image": prodProfileImgPath + "minho.jpg",
    "link": "https://github.com/minhoyooDEV"
  },
  {
    "name": "BEAN",
    "profession": "안드로이드 개발자",
    "motto": "파이팅~~",
    "image": prodProfileImgPath + "bean.jpg",
    "link": "https://github.com/sbean0215"
  },
  {
    "name": "깡쏘",
    "profession": "웹 개발자",
    "motto": "blühen",
    "image": prodProfileImgPath + "kangsso.jpg"
  },
  {
    "name": "JY",
    "profession": "군인",
    "motto": "짱짱 멋있는 육군입니다",
    "image": prodProfileImgPath + "army.jpg"
  },
];

export default {
  created: function() {
    this.profiles = profiles;
  },
  data () {
    return {
      profiles: []
    }
  },
  components: {
    Card
  }
}
</script>
