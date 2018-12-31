<template>
  <v-card class="elevation-0 transparent">
    <v-card-title primary-title class="layout justify-center">
      <div class="headline text-xs-center font-weight-bold">{{ profile.name }}</div>
    </v-card-title>
    <a class="profile-image" v-bind:href="profile.link" target="_blank">
      <v-avatar size="120">
        <img v-bind:src="profile.image">
      </v-avatar>
    </a>
    <v-card-text>
      <span class="subheading font-weight-bold">{{ profile.profession }}</span>
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