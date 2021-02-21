<template>
  <div>
    {{ msg }}
    <hr />
    <Child title="父传子用prop" @sendMsg="getMsg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Child from "./Child.vue";
// Component装饰器
@Component({
  components: {
    Child,
  },
})
export default class Parent extends Vue {
  data() {
    return {
      msg: "学习@Component装饰器",
    };
  }
  getMsg(info) {
    console.log(info);
    this.msg = info;
  }
}
</script>

<style lang="" scoped></style>
