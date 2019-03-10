<template>
  <div
    id="e3"
    style="max-width: 1200px; margin: auto;"
  >
    <p>제목: <input type="text" id="postTitle" v-model="post.title" placeholder="제목을 입력하세요"></p>
    <p>작성자: <input type="text" id="postWriter" v-model="post.writer" placeholder="작성자를 입력하세요"></p>
    <editor
      v-model="post.content"
      previewStyle="vertical"
      height="420px"
      mode="markdown"
    />
    <v-btn id="save" v-on:click="save" small dark color="cyan">저장</v-btn>
    <router-link to="/posts">
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="indigo"
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor';
import { db } from '../config/db';

let postsRef = db.ref('posts')

export default {
  components: {
    'editor': Editor
  },
  data() {
      return {
        post: {
            title: '',
            writer: '',
            content: ''
        }
      }
  },
  methods: {
    save: function () {
      postsRef.push(this.post);
      alert("성공적으로 저장되었습니다.");
    }
  }
}

</script>

<style>

</style>
