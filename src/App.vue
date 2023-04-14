<template>
  <div id="app">
    <Row>
      <Col span="24"><CodeMirrorEdit /></Col>
      <Col span="24"> <Test1Data /></Col>
      <Col span="24"><TeswData /></Col>
    </Row>
  </div>
</template>

<script>
import CodeMirrorEdit from "./views/codeMirror/codeMirorEdit.vue";
import Test1Data from "./views/data/test1/test1Data.vue";
import TeswData from "./views/data/test1/teswData.vue";

export default {
  name: "App",
  components: {
    CodeMirrorEdit,
    Test1Data,
    TeswData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
