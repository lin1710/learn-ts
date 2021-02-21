<template>
  <div>
    <el-button type="primary" @click="toRegister">返回注册页面</el-button>
    <el-table :data="tableData" style="width: 100%">
      <!-- <el-table-column prop="id" label="序号" width="180"> </el-table-column> -->
      <el-table-column prop="uname" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: this.$store.state.registerData,
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ path: "/project" });
    },
  },
};
</script>

<style lang="" scoped></style>
