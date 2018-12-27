<template>
  <v-card class="elevation-0 transparent">
    <v-card-title primary-title class="layout justify-center">
      <div class="headline">연락처</div>
    </v-card-title>
    <v-card-text>
      9dev와 함께하고 싶다면 연락주세요!
    </v-card-text>
    <v-list class="transparent">
      <v-list-tile class="layout justify-center">
        <v-list-tile-content>
          <v-list-tile-title>{{ mail }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mail: 'minho.yoo.dev@gmail.com'
    }
  }
}
</script>