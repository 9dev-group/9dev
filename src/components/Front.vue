<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <img id="logo" v-bind:src="image"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
const prodLogoImgPath = "https://raw.githubusercontent.com/greatfarmer/9dev/master/src/assets/images/logo/";
const devLogoImgPath = "src/assets/images/logo/";

export default {
  data() {
    return {
      image: devLogoImgPath + 'Logo_01.png'
    }
  }
}
</script>

<style scoped>
img#logo {
  width: 85%;
  max-width: 500px;
  height: auto;
}
</style>
