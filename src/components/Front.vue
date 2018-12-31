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
          <h1 class="display-4">{{ title }}</h1>
        </div>
        <img v-bind:src="image"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '9dev',
      image: 'https://raw.githubusercontent.com/greatfarmer/9dev/master/src/assets/images/logo/valuto.jpg'
    }
  }
}
</script>
