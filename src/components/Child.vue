<template>
  <div>
    子组件-----
    {{ title }}
    <button @click="sendMsg()">子传父</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component
export default class Child extends Vue {
  // 父传子用prop
  @Prop(String) title: string | undefined;

  data() {
    return {};
  }
  // 子传父用$emit
  sendMsg() {
    this.$emit("sendMsg", "点击按钮后看到子传父");
  }
}
</script>

<style lang="" scoped></style>
