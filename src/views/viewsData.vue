<template>
  <div>
    <CodeMirrorEdit />
    <Test1Data />
  </div>
</template>

<script>
import CodeMirrorEdit from "./codeMirror/codeMirorEdit.vue";
import Test1Data from "./data/test1/test1Data.vue";

export default {
  name: "Test1Data",
  components: {
    CodeMirrorEdit,
    Test1Data,
  },
};
</script>

<style>
</style>