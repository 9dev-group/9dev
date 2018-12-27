<template>
  <section>
    <h2>사람들</h2>
    <div class="row center">
      <div class="col-3" v-for="(item, index) in profiles" v-bind:key="index">
        <Card v-bind:profile='item' />
      </div>
    </div>
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

<style scoped>

</style>
