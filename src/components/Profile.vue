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