<template lang="html">
  <div class="">
    <el-row >
      <h1>Login</h1>
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off" v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off" v-model="password"></el-input>
          </el-form-item>
          <el-button class="btn-login" type="primary" @click="signIn()">Login</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods: {
    signIn() {
      let user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('signIn',user)
    }
  }
}
</script>

<style lang="css">
</style>
