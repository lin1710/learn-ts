<template>
  <div>
    <div class="demo-input-suffix">
      姓名：
      <el-input placeholder="请输入姓名" v-model="uname" clearable> </el-input>
    </div>

    <div class="demo-input-suffix">
      地址：
      <el-input placeholder="请输入地址" v-model="address" clearable>
      </el-input>
    </div>

    <el-button type="primary" @click="savedata">点击保存</el-button>
    <el-button type="primary" @click="toShowInfo">点击展示</el-button>
  </div>
</template>

<script>
import InfoData from "../model/InfoData";
export default {
  name: "",
  data() {
    return {
      id: this.$store.state.registerData.length,
      uname: this.$store.state.uname,
      address: this.$store.state.address,
      registerData: this.$store.state.registerData,
    };
  },
  methods: {
    toShowInfo() {
      this.$router.push({ path: "/showinfo" });
    },
    savedata() {
      //   console.log(`姓名是${this.uname},地址是${this.address}`);
      this.registerData.uname = this.uname;
      this.registerData.address = this.address;
      this.registerData.push({ uname: this.uname, address: this.address });
      console.log(this.registerData);
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 55%;
  margin-bottom: 20px;
}
</style>
