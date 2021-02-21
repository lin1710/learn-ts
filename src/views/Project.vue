<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 注册页面 -->
      <el-tab-pane label="注册页面" name="first">
        <Register />
      </el-tab-pane>
      <!-- <el-tab-pane label="注册信息" name="second"><ShowInfo /></el-tab-pane> -->
      <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import Register from "./Register.vue";
import ShowInfo from "./ShowInfo.vue";
export default {
  name: "",
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    Register,
    ShowInfo,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped></style>
