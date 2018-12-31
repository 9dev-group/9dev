<template>
  <v-card class="elevation-0 transparent">
    <v-card-text class="text-xs-center">
      <img v-bind:src="profile.image" width="100" height="100"/>
    </v-card-text>
    <v-card-title primary-title class="layout justify-center">
      <div class="headline text-xs-center">{{ profile.name }}</div>
    </v-card-title>
    <v-card-text>
      {{ profile.profession }}
      <br>
      {{ profile.motto }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['profile']
};
</script>