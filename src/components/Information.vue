<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm4>
          <Location></Location>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <Contact></Contact>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Location from './Location.vue';
import Contact from './Contact.vue';

export default {
  components: {
    Location,
    Contact
  }
}
</script>