<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ post.title }}</div>
        <span>{{ post.writer }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn dark color="indigo">보기</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['post']
};
</script>