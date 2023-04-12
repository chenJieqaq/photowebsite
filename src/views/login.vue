<template>
  <div class="login-box">
    <el-card class="login-card" shadow="hover">
      <div class="login-header">登录</div>
      <div class="login-body">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" class="login-form">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      loginForm: {
        username: 'wanqian',  //账号密码
        password: '12345',
      },
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 在这里处理登录逻辑
          console.log('登录成功！');
          router.push('/home');  //跳转页面
        } else {
          console.log('表单验证失败！');
        }
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /*background-color: #f5f5f5;*/
  background-image: url("../assets/images/background.webp");
}

.login-card {
  width: 400px;
}

.login-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.login-form {
  width: 300px;
  margin: 0 auto;
}
</style>
