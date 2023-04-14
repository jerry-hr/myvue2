<template>
  <div>
    <Row>
      <Col :span="10">
        <Card>
          <!-- 新增数据项 1-->
          <div style="height: 300px; width: 100%">
            <div>
              <div class="m-t-30" style="display: flex">
                <div>
                  <!-- 全选 -->
                  <div
                    v-if="haveData"
                    style="margin-left: -278px; margin-bottom: 20px"
                  >
                    <Checkbox
                      :indeterminate="indeterminate"
                      :value="checkAll"
                      @click.prevent.native="handleCheckAll"
                      >全选配置
                    </Checkbox>
                    <span style="color: #999999; font-size: 12px"
                      >(中文名称 + 英文名称)
                    </span>
                  </div>
                  <!-- Checkbox -->
                  <div style="width: 834px; height: 430px; overflow-y: auto">
                    <Form :label-width="20">
                      <FormItem>
                        <CheckboxGroup
                          v-model="social"
                          @on-change="handlerRadio"
                        >
                          <Row>
                            <Col
                              v-for="item in checkBoxList"
                              :span="12"
                              :key="item.termId"
                              class="h-40-px"
                            >
                              <Checkbox
                                :key="item.termId"
                                :label="item.chineseName"
                                style="color: #333"
                                >{{ item.chineseName }}&nbsp;&nbsp;{{
                                  item.fieldName
                                }}
                              </Checkbox>
                            </Col>
                          </Row>
                        </CheckboxGroup>
                      </FormItem>
                    </Form>
                  </div>
                </div>
                <div v-if="haveData" class="box"></div>
                <!-- 已选数据 -->
                <div style="width: 300px">
                  <div v-show="tableList.length" class="m-b-8">已选数据项</div>
                  <ul class="list" style="height: 300px; overflow: scroll">
                    <li v-for="(item, index) in tableList" :key="item.termId">
                      <div
                        :draggable="draggable"
                        style="display: flex"
                        @dragenter="dragenter($event, index)"
                        @dragover="dragover($event, index)"
                        @dragstart="dragstart(index)"
                      >
                        <div style="width: 160px">
                          {{ item.fieldName }}
                        </div>
                        <div
                          class="list-item1"
                          @click="deldteCheck(item.fieldName)"
                        >
                          <Icon type="md-close" />
                        </div>
                        <span class="list-item" @mousedown="mousedown"> </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col :span="7"></Col>
      <Col :span="7"></Col>
    </Row>
  </div>
</template>

<script>
import Lodash from "lodash";
export default {
  name: "teswData",
  data() {
    return {
      dragIndex: "",
      draggable: false,
      tableDraggable: false,
      social: [],
      indeterminate: false,
      checkAll: false,
      tableDataLists: [],
      checkBoxList: [
        {
          termId: "1",
          chineseName: "苹果",
          fieldName: "apple",
        },
        {
          termId: "2",
          chineseName: "香蕉",
          fieldName: "banana",
        },
        {
          termId: "3",
          chineseName: "橘子",
          fieldName: "orange",
        },
        {
          termId: "4",
          chineseName: "红色",
          fieldName: "red",
        },
        {
          termId: "5",
          chineseName: "绿色",
          fieldName: "green",
        },
        {
          termId: "6",
          chineseName: "粉色",
          fieldName: "pink",
        },
      ],
      tableList: [],
      showAddData: true,
      haveData: true,
    };
  },

  mounted() {
    window.addEventListener("mousedown", (e) => {
      if (e.target.localName !== "span") {
        this.draggable = false;
        this.tableDraggable = false;
      }
    });
  },
  methods: {
    // 新增数据项
    addData() {
      this.checkAll = false;
      this.tableList = [];
      this.checkBoxList = [];
      this.haveData = false;
    },

    handlerRadio(data) {
      console.log(data, "data");
      console.log(this.checkBoxList, "dathis.checkBoxListta");
      // if (!Lodash.isEmpty(data)) {
      //   this.showAddData = false;
      // } else {
      //   this.showAddData = true;
      // }
      if (data.length === this.checkBoxList.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
      this.tableList = [];
      data.forEach((element) => {
        this.checkBoxList.filter((item) => {
          if (item.chineseName === element) {
            this.tableList.push(item);
          }
        });
      });
    },
    // 全选
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.social = this.checkBoxList.map((item) => item.chineseName);
        this.handlerRadio(this.social);
      } else {
        this.social = [];
        this.handlerRadio(this.social);
      }
    },
    // 删除
    deldteCheck(fieldName) {
      this.tableList = this.tableList.filter(
        (item) => item.fieldName !== fieldName
      );
      this.social = this.tableList.map((item) => item.chineseName);
      if (Lodash.isEmpty(this.social)) {
        this.showAddData = true;
      }
      this.handlerRadio(this.social);
    },
    // 拖动
    mousedown() {
      this.draggable = true;
      this.tableDraggable = true;
    },
    dragstart(index) {
      this.dragIndex = index;
    },
    dragenter(e, index) {
      this.aa = e.target.localName;
      if (e.target.localName === "span") {
        e.preventDefault();
        if (this.dragIndex !== index) {
          const source = this.tableList[this.dragIndex];
          this.tableList.splice(this.dragIndex, 1);
          this.tableList.splice(index, 0, source);
          this.dragIndex = index;
        }
      }
    },
    dragover(e, index) {
      e.preventDefault();
      console.log(index);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 0;
  height: 300px;
  border-left: 1px solid;
  border-color: #dcdcdc;
  margin-right: 40px;
}

.list {
  list-style: none;
  color: #333;
  height: 40px;
  font-size: 14px;
  line-height: 40px;

  .list-item {
    cursor: move;
    margin-top: 10px;
    width: 20px;
    height: 20px;
    background: url("../../../assets/images/tuodong.png") no-repeat center
      center;

    &:hover {
      // background: url("./img/draging.png") no-repeat center center;
    }

    img {
      pointer-events: none;
    }
  }

  .list-item1 {
    cursor: pointer;
    width: 40px;
  }
}
</style>
