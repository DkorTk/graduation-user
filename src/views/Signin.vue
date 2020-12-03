<template>
  <div>
    <Header />
    <div class="login">
      <div class="loginInput">
        <div class="text">
          用户注册
        </div>
        <div class="demo-input-suffix">
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
            v-model="username"
          >
          </el-input>
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="demo-input-suffix">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请确认密码"
            v-model="password"
            show-password
          ></el-input>
          <el-input
            placeholder="请输入昵称"
            prefix-icon="el-icon-user"
            v-model="username"
          >
          </el-input>
        </div>
        <el-button type="primary" class="button">注册</el-button>
        <div class="linkFather">
          <div class="link">
              注册即代表你已阅读同意《领养准则》
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Head";
import Footer from "../components/Footer/Footer";
export default {
  name: "signin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style  lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.loginInput {
  margin: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.22);
}
.text {
  margin: 25px;
}
.demo-input-suffix {
}
.demo-input-suffix:after {
  content: "";
  display: block;
  clear: both;
}

.el-input {
  display: inline-block;
  width: 80% !important;
  margin: 15px !important;
}
.el-button--primary {
  margin: 10px !important;
}
.el-button {
  width: 40%;
}

.linkFather {
  margin: 15px;
}
.linkFather::after {
  content: "";
  display: block;
  clear: both;
}
.link {
  float: right;
  color: #b5b6ba;
}
</style>
