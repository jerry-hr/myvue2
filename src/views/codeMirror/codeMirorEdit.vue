<template>
  <div>
    <Row>
      <Col span="2">
        <p style="margin-left: 0px">组件名：codeMirrorEdit</p>
      </Col>
    </Row>
    <Row>
      <Col span="8"
        ><codemirror ref="cmRef" v-model="code" :options="cmOptions"
      /></Col>
      <Col span="8"><div class="box">123</div></Col>
      <Col span="8"><div class="box2">123</div></Col>
    </Row>
  </div>
</template>

<script>
import "codemirror/theme/xq-light.css";
import "codemirror/mode/sql/sql.js";
// 加提示的引用
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/show-hint";
export default {
  name: "codeMirrorEdit",
  data() {
    return {
      code: "",
      cmOptions: {
        tabSize: 4,
        mode: "text/x-sql",
        theme: "xq-light",
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        // 加提示
        // hintOptions: {
        //  completeSingle: false
        // }
      },
      // currentSeletion: ''
    };
  },
  mounted() {
    // 加提示
    // this.$refs.cmRef.codemirror.on('inputRead', (cm) => {
    //   cm.showHint()
    // })
    // 获取选中的内容
    // this.$refs.cmRef.codemirror.on('cursorActivity', (cm) => {
    //   this.currentSeletion = cm.getSelection()
    // })
    this.editor = this.$refs.cmRef.codemirror;
    // 设置codemirror高度为450
    this.editor.setSize("auto", 450);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.vue-codemirror {
  width: 500px;
  text-align: left;
  border: 1px solid #b9b9b9;
}
.box {
  background-color: @backgroundC;
}
.box2 {
  background-color: #24f708;
}
</style>