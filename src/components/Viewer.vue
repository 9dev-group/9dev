<template>
    <viewer
    :value="viewerText"
    height="500px"
    />
</template>

<script>
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import { Viewer } from '@toast-ui/vue-editor'

export default {
    components: {
        'viewer': Viewer
    },
    data() {
        return {
            viewerText: 'viewerText',
        };
    },
};
</script>

<style scoped>

</style>