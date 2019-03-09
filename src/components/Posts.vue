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
          <v-flex xs12 v-for="(item, index) in posts" v-bind:key="index">
            <Post v-bind:post='item' />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <router-link to="/editor">
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
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import { Viewer } from '@toast-ui/vue-editor'
import { db } from '../config/db';
import Post from './Post.vue';

let postsRef = db.ref('posts')

export default {
  components: {
      'viewer': Viewer,
      Post
  },
  firebase: function() { // Vuefire 라이브러리로 Vue.js속성 바인딩
      return {
          posts: postsRef
      }
  }
};
</script>