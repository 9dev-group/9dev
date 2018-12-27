<template>
  <v-footer class="white">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="black--text ml-3">
          {{ message }}
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      message: '©2018 9dev'
    }
  }
}
</script>

<style>
p#footer {
  font-size: 0.8rem;
}
</style>
