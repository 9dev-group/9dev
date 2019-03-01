<template>
    <editor
    :value="editorText"
    :options="editorOptions"
    :html="editorHtml"
    :visible="editorVisible"
    previewStyle="vertical"
    height="500px"
    mode="markdown"
    />
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor'

export default {
  components: {
    'editor': Editor
  },
  data() {
      return {
          editorText: ''
      }
  }
}

</script>

<style scoped>

</style>
