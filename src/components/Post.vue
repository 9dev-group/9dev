<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ post.title }}</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <p>작성자: {{ post.writer }}</p>
          <viewer :value="post.content"/>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="indigo">좋아요</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import "tui-editor/dist/tui-editor-contents.css";
import "highlight.js/styles/github.css";
import { Viewer } from "@toast-ui/vue-editor";
import { db } from "../config/db";

const postsRef = db.ref("posts");

export default {
  components: {
    viewer: Viewer
  },
  data() {
    return {
      post: {}
    };
  },
  created() {
    const key = postsRef.child(this.$route.params.id);
    key.once("value", data => {
      this.post = data.val();
    });
  }
};
</script>