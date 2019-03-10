<template>
  <div
    id="e3"
    style="max-width: 600px; margin: auto;"
    class="grey lighten-3"
  >
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(post, index) in posts" v-bind:key="index">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ post.title }}</div>
                  <span>{{ post.writer }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <router-link :to="{ name: 'post', params: { id: post['.key'], post: post } }">
                  <v-btn dark color="indigo">보기</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <router-link to="/posts/new">
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import { db } from '../config/db';

const postsRef = db.ref('posts');

export default {
  firebase: function() { // Vuefire 라이브러리로 Vue.js속성 바인딩
    return {
        posts: postsRef
    }
  }
};
</script>