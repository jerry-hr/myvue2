<template>
  <div>
    <Row>
      <Col span="2">
        <p style="margin-left: 0px">组件名：test1Data</p>
      </Col>
    </Row>
    <ROW>
      <Col span="8">
        <div class="box1"><Button type="primary">Primary</Button></div>
        <Divider size="small" />
        <div class="box1">
          <el-button type="success">成功按钮</el-button>
        </div></Col
      >
      <Col span="8">
        <div class="box3">
          <List>
            <ListItem>
              <ListItemMeta
                avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                title="This is title"
                description="This is description, this is description."
              />
            </ListItem>
          </List></div
      ></Col>
      <Col span="8"></Col>
    </ROW>
  </div>
</template>

<script>
export default {
  name: "test1Data",
};
</script>

<style lang="less" scoped>
.box1 {
  width: 100px;
  height: 100px;
  border: 1px dashed gray;
}
.box2 {
  width: 200px;
  height: 100px;
  border: 1px dashed gray;
}
.box3 {
  width: 300px;
  height: 100px;
  border: 1px dashed gray;
}
.box4 {
  width: 400px;
  height: 100px;
  border: 1px dashed gray;
}
.box5 {
  width: 500px;
  height: 100px;
  border: 1px dashed gray;
}
</style>