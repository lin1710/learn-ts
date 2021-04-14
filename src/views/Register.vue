<template>
  <div>
    <el-button type="primary" @click="savedata">点击保存</el-button>
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
