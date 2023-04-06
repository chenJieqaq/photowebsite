<template>
  <div class="login" :style="'background-image:url(' + Background + ');'">
    <div class="login-box">
      <h2>登录</h2>
      <form>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" class="form-input" />
        </div>
        <div class="form-group2">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" class="form-input" />
        </div>
        <button @click.prevent="login">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import Background from "../assets/images/background.jpg";
export default {
  Background: Background,
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 登录逻辑
    },
  },
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-box {
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.form-group2 {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}
label {
  display: block;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
